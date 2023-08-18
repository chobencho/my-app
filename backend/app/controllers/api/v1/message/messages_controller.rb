class Api::V1::Chat::MessagesController < ApplicationController
  def index
      # パラメータからユーザーIDを取得し整数に変換
      user_id1 = params[:id].to_i
      
      # ユーザーIDに関連する部屋のIDを取得
      room_ids = RoomMember.where(user_id: user_id1).pluck(:room_id)
      
      # 部屋ごとに他のユーザーIDを取得し、各部屋のユーザーIDを配列として保持
      rooms = []
      room_ids.each do |room_id|
          # 自分以外のユーザーIDを取得して配列に追加
          room = RoomMember.where(room_id: room_id).pluck(:user_id).reject { |user_id| user_id == user_id1 }
          rooms << { room_id: room_id, user_ids: room } # 部屋IDとユーザーIDを組み合わせて追加
      end
      
      # 各ユーザーIDに対応する最新のメッセージのbodyを取得
      chatUsers = []
      rooms.each do |room|
          room_id = room[:room_id]
          user_ids = room[:user_ids]
          
          user_ids.each do |user_id|
              user = User.find(user_id)
              messages = Message.where(user_id: [user_id, user_id1], room_id: room_id).order(created_at: :desc).limit(1) # 最新のメッセージを取得
              body = messages.first&.body # 最新のメッセージのbodyを取得
              created_at = messages.first&.created_at # 最新のメッセージのbodyを取得
              chatUsers << { user: user, room_id: room_id, latest_message_body: body, latest_created_at: created_at }

          end
      end

      # `created_at`で降順にソート
      # sorted_chatUsers = chatUsers.sort_by { |chat| chat[:latest_created_at] }.reverse
      
      # 最終的なJSONデータの作成
      json_data = chatUsers.map do |chat|
          user_data = chat[:user].as_json
          user_data["room_id"] = chat[:room_id] # 部屋IDを追加
          user_data["latest_message_body"] = chat[:latest_message_body] # 最新のメッセージのbodyを追加
          user_data["latest_created_at"] = chat[:latest_created_at] # 最新のメッセージの更新日時を追加
          user_data
      end
      
      json_data = json_data.sort_by { |chat| chat[:latest_created_at] }.reverse

      json_data = json_data.reverse
      # JSONデータをレスポンスとして送信
      render json: json_data
  end
  
  

  def create
      # チャットしたい相手と自分のユーザIDを取得
      user_id = params[:id].to_i
      my_id = params[:string_my_id].to_i
      # トランザクションを実行
      ActiveRecord::Base.transaction do
          begin
              # 新しいチャットルームのルームIDを決定
              # room_idのレコードがあれば最新レコード+1, 無ければ1で作成
              if Room.order(created_at: :desc).pluck(:room_id).first
                  new_value = Room.order(created_at: :desc).pluck(:room_id).first + 1
              else
                  new_value = 1
              end
              # 新規チャットルーム作成、新規チャットルームに属するユーザを登録
              Room.create(room_id: new_value)
              RoomMember.create(room_id: new_value, user_id: user_id)
              RoomMember.create(room_id: new_value, user_id: my_id)
              render json: { room_create: true, message: "チャットルームを作成しました" }
          rescue ActiveRecord::RecordInvalid => e
              render json: { room_create: false, message: "チャットルームの作成に失敗しました" }
          end
      end
  end
end


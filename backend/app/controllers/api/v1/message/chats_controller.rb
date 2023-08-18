class Api::V1::Message::ChatsController < ApplicationController
  def show
    @messages = Message.joins(:user).select("messages.*, users.name AS name, users.image AS userImage").where(room_id: params[:id])

    render json: @messages
  end

  def create
    message = Message.new(message_params)  
    message.save
  end

  def destroy
    room_id = params[:id].to_i
    ActiveRecord::Base.transaction do
        begin
            @messages = Message.where(room_id: room_id).destroy_all
            @room = Room.find_by(room_id: room_id).destroy
            @roomMember = RoomMember.where(room_id: room_id).destroy_all
            render json: { room_destroy: true, message: "チャットを削除しました" }
        rescue ActiveRecord::RecordInvalid => e
            render json: { room_destroy: false, message: "チャットの削除に失敗しました" }
        end
    end
  end

  def exist
    user_id = params[:id]
    my_id = params[:string_my_id]

    room_id_1 = RoomMember.where(user_id: user_id).pluck(:room_id)
    room_id_2 = RoomMember.where(user_id: my_id).pluck(:room_id)

    common_room_id = room_id_1 & room_id_2

    if common_room_id.present?
        render json: common_room_id
      else
        render json: nil
    end
  end

  def chatBuddy
    @partner = User.find_by(id: params[:id])
    render json: @partner
  end

  private

  def message_params
      params.permit(:room_id, :user_id, :body, :image)
  end
end

class Api::V1::User::UsersController < ApplicationController
    def index
  
      # 二重配列をフラットな配列に変換
      keywords = params[:keywords].flatten
      # 複数のキーワードに対して部分一致の条件を作成し、それをORで結合する
      conditions = keywords.map { |keyword| "tag_name LIKE '%#{keyword}%'" }.join(" OR ")
      user_ids = UserResearchtagz.where(conditions).pluck(:user_id).uniq
      @users = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("users.*, subjects.subject_code AS subject_code, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code").where(id: user_ids).where.not(id: params[:id]).order(last_login: :desc)
  
      render json: @users
    end
  
    def updateLastLogin 
      @user = User.find_by(id: params[:my_id])
      @user.update(last_login: Time.current)
  
      render json: { message: "ログイン日時が更新されました" }
    end
  
    def show
      @user = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("*, users.id AS id, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code, COUNT(user_likes.id) AS like_count").left_joins(:user_likes).group("users.id").find_by(id: params[:id])
      render json: @user  
    end
  
    def sort
      sortValue = params[:sort_value]
  
      if sortValue == "sortLogin"
        @users = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("users.*, subjects.subject_code AS subject_code, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code").where.not(id: params[:id]).order(last_login: :desc)
      elsif sortValue == "sortLike"
        @users = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("users.*, subjects.subject_code AS subject_code, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code, COUNT(user_likes.id) AS like_count").left_joins(:user_likes).where.not(id: params[:id]).group("users.id").order(like_count: :desc)
      elsif sortValue == "sortCreated"
        @users = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("users.*, subjects.subject_code AS subject_code, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code").where.not(id: params[:id]).order(created_at: :desc)
      end
      render json: @users
    end
  
    def edit
      @user = User.joins(:prefecture, :subject, :gender, :grade).joins("INNER JOIN prefectures AS birthplace_prefectures ON users.birthplace_id = birthplace_prefectures.id").select("*, users.id AS id, prefectures.prefecture_code AS prefecture_code, birthplace_prefectures.prefecture_code AS birthplace_code").find_by(id: params[:id])
      render json: @user  
    end
    
    def update
      user_id = params[:id]
      hobby_ids = params[:hobby_ids]
      interest_ids = params[:interest_ids]
      tags = params[:tags]
  
      ActiveRecord::Base.transaction do
        begin
          @user = User.find_by(id: user_id)
          @user.update(user_edit_params)
  
          unless interest_ids.nil?
            # 既存の興味データを削除
            @deleteInterest = UserInterest.where( user_id: user_id).destroy_all
            # 新しく興味データを作成
            # user_interestsテーブルに関連を登録する
            @interests = Interest.where(id: interest_ids)
            @user.interests << @interests
          end
  
          unless hobby_ids.nil?
            # 既存の趣味データを削除
            @deleteHobby = UserHobby.where( user_id: user_id).destroy_all
            # 新しく趣味データを作成
            # user_hobbiesテーブルに関連を登録する
            @hobbies = Hobby.where(id: hobby_ids)
            @user.hobbies << @hobbies
          end
          
          # 既存のタグデータを削除
          # tagsが空の場合はデータもデータを削除するため、unlessの外に出している
          @deleteResearchTags = UserResearchtag.where( user_id: user_id).destroy_all
  
          unless tags.nil?
            # 新しくタグデータを作成
            tags.each do |tag_name|
              tag = UserResearchtag.new(user_id: user_id, tag_id: "1", tag_name: tag_name)
              @user.user_researchtags << tag
            end
          end
  
          render json: { userData_edit: true, message: "成功" }
        rescue ActiveRecord::RecordInvalid => e
          render json: { userData_edit: false, message: "失敗" }
        end
      end
    end
  
    def hobby
      @hobbies = UserHobby.joins(:hobby).select('user_hobbies.id', 'user_hobbies.user_id', 'user_hobbies.hobby_id', 'hobbies.hobby_code', 'user_hobbies.created_at', 'user_hobbies.updated_at').where(user_id: params[:id])
      render json: @hobbies
    end
  
    def interest
      @interests = UserInterest.joins(:interest).select('user_interests.id','user_interests.user_id', 'user_interests.interest_id', 'interests.interest_code', 'user_interests.created_at', 'user_interests.updated_at').where(user_id: params[:id])
      render json: @interests
    end
  
    def researchTag
      @tags = UserResearchtag.where(user_id: params[:id])
      render json: @tags
    end
  
    private
  
    def user_edit_params
      params.permit(
        :name,
        :image, 
        :body,
        :age,
        :gender_id,
        :grade_id,
        :prefecture_id,
        :birthplace_id,
        :subject_id,
        :interest_id_1,
        :interest_id_2,
        :interest_id_3
      )
    end
  
    
  end
  
  
  
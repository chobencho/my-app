class Api::V1::Board::BoardsController < ApplicationController
    before_action :check_user_permission, only: [:edit]

  def index
      @boards = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image")
      render json: @boards
  end

  def show
      @board = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image, COUNT(board_likes.id) AS like_count").left_joins(:board_likes).group("boards.id").find_by(id: params[:id])
      
      if @board.present?
          render json: @board, status: :ok
      else
          render json: { status: :not_found, message: "No board found." }
      end
  end

  def create
      @board = Board.new(board_params)  
      @board.save
  end

  def edit
      @board = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image").find_by(id: params[:id])
      render json: @board
  end

  def update
      @board = Board.find_by(id: params[:id])
      if @board.update(board_params)
        render json: @board
      else
        render json: {status: "error", message: "掲示板の編集に失敗しました"}
      end
  end

  def destroy
      ActiveRecord::Base.transaction do
          begin
              @board = Board.find_by(id: params[:id]).delete
              @boardLikes = BoardLike.where(board_id: params[:id]).destroy_all
              @boardComments = BoardComment.where(board_id: params[:id]).destroy_all

              render json: {status: 200, message: "success delete board!"}
          rescue ActiveRecord::RecordInvalid => e
            render json: {status: 400, message: "failed delete board!"}
          end
      end
  end

  def myboard
      @boards = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image").where(users: {id: params[:id]})
      render json: @boards
  end

  def favboard
      @boards = Board.joins(:board_likes, :user).select("boards.*, users.id AS user_id, board_likes.board_id AS board_id, boards.body AS board_body, users.image AS user_image, users.name AS name").where(board_likes: {user_id: params[:id]})
      render json: @boards
  end

  private

  def board_params
      params.permit(:user_id, :title, :image, :body)
  end

  def check_user_permission

    user_id = Board.find_by(id: params[:id]).user_id
  
    if user_id != current_api_v1_user.id.to_s
      render json: { error: "他のユーザーの画面にアクセスできません。" }, status: :forbidden
    end
  end
  
end

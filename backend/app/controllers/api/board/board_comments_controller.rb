class Api::Board::BoardCommentsController < ApplicationController
  def show
    @comments =
      BoardComment
        .joins(:user)
        .select(
          "board_comments.id AS comment_id, board_comments.body, board_comments.user_id, board_comments.created_at, users.name, users.image"
        )
        .where(board_id: params[:id])
    render json: @comments
  end

  def create
    @comment = BoardComment.new(comment_params)
    @comment.save
  end

  private

  def comment_params
    params.permit(:board_id, :user_id, :body)
  end
end

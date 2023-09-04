class Api::Community::CommunityChatsController < ApplicationController
  def show
    @comments =
      CommunityComment
        .joins(:user)
        .select(
          "community_comments.*, users.name AS name, users.image AS userImage"
        )
        .where(community_id: params[:id])
    render json: @comments
  end

  def communityData
    @community =
      Community
        .joins(:community_category)
        .select("communities.*, community_categories.community_code")
        .find_by(id: params[:id])
    render json: @community
  end

  def create
    comment = CommunityComment.new(comment_params)
    if comment.save
      render json: { status: 200, message: "success community comment!" }
    else
      render json: { status: 200, message: "failed community comment!" }
    end
  end

  def subscribed
    @community =
      CommunityUser.where(
        community_id: params[:community_id],
        user_id: params[:id]
      ).present?
    render json: @community
  end

  private

  def comment_params
    params.permit(:community_id, :user_id, :body, :image)
  end
end

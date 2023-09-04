class Api::User::UserLikesController < ApplicationController
  def show
    @like =
      UserLike.find_by(
        my_id: params[:id],
        user_id: params[:general_id]
      ).present?
    render json: @like
  end

  def create
    @like = UserLike.create(my_id: params[:my_id], user_id: params[:general_id])
    render json: true
  end

  def destroy
    @like =
      UserLike.find_by(my_id: params[:id], user_id: params[:general_id]).delete
    render json: false
  end
end

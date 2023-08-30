class Api::V1::Board::BoardLikesController < ApplicationController
    def show
      @like = BoardLike.find_by(user_id: params[:id], board_id: params[:general_id]).present?
      render json: @like
    end
  
    def create
      @like = BoardLike.create(user_id: params[:my_id], board_id: params[:general_id])
      render json: true
    end
  
    def destroy
      @like = BoardLike.find_by(user_id: params[:id], board_id: params[:general_id]).delete
      render json: false
    end
end  
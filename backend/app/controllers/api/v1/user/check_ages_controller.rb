class Api::V1::User::CheckAgesController < ApplicationController
  def show 
    user = User.find_by(id: params[:id])
    if user.check_age == "1"
      render json: true
    else
      render json: false
    end
  end
end

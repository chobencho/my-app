class Api::V1::Auth::PasswordsController < ApplicationController
    respond_to :json
  
    def create
      user = User.find_by(email: params[:email])
  
      if user
        user.send_reset_password_instructions
        send_reset_mail_success
      else
        reset_password_failed
      end
    end
  
    def update
      user = User.reset_password_by_token(
        reset_password_token: params[:reset_password_token],
        password: params[:password],
        password_confirmation: params[:password_confirmation]
      )
    
      if user.errors.empty?
        reset_password_success
      else
        reset_password_failed(user.errors.full_messages)
      end
    end
  
    def changePassword
      if current_user&.valid_password?(params[:current_password])
        if current_user.update(password_params)
          bypass_sign_in(current_user) # Deviseのログイン情報更新
  
          render json: { message: 'Password updated successfully.' }
        else
          render json: { errors: current_user.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { errors: ['Current password is incorrect.'] }, status: :unprocessable_entity
      end
    end
  
    private
  
    def password_params
      params.require(:user).permit(:password, :password_confirmation)
    end
  
    def respond_with(resource, _opts = {})
      send_reset_mail_success && return unless resource.present?
      reset_password_success && return if resource.persisted?
  
      reset_password_failed
    end
  
    def send_reset_mail_success
      render json: { message: 'Send Reset Mail sucessfully.' }
    end
  
    def reset_password_success
      render json: { message: 'Password Reset sucessfully.' }
    end
  
    def reset_password_failed(errors = ['Something went wrong.'])
      render json: { errors: errors }, status: :unprocessable_entity
    end
end
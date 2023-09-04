class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action { I18n.locale = :ja }

  skip_before_action :verify_authenticity_token
  helper_method :current_user, :user_signed_in?
end

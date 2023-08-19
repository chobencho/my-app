class ResetMailer < ApplicationMailer
    def password_reset_instructions(user)
      @user = user
      @reset_password_url = edit_password_url(user, reset_password_token: user.send_reset_password_instructions)
      mail(to: user.email, subject: 'パスワードリセットのご案内')
    end
end
  
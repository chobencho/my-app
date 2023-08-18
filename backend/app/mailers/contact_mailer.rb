
class ContactMailer < ApplicationMailer
    def contact_email(id, email, image)
      @id = id
      @email = email
      @image = image
  
      mail(to: 'y-nakatani@tanesho.co.jp', subject: '年齢確認のお願い')
    end
  
    def apply_email(id, title, body)
      @id = id
      @title = title
      @body = body
  
      mail(to: 'y-nakatani@tanesho.co.jp', subject: '新規コミュニティの申請')
    end
  end
  
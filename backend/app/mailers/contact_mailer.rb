class ContactMailer < ApplicationMailer
  def contact_email(id, email, image)
    @id = id
    @email = email
    @image = image

    mail(to: "chobencho@gmail.com", subject: "年齢確認のお願い")
  end

  def apply_email(id, title, body)
    @id = id
    @title = title
    @body = body

    mail(to: "chobencho@gmail.com", subject: "新規コミュニティの申請")
  end
end

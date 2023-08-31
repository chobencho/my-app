class Api::V1::User::VerificationsController < ApplicationController
    def create
        id = params[:id]
        email = params[:email]
        image = params[:image]

        if image.present?
            ActiveRecord::Base.transaction do
                begin
                    @verification = CheckAge.find_by(user_id: id)
                    if @verification
                        @verification.update(verification_params)
                    else
                        @verification = CheckAge.create(verification_params) 
                    end

                    uploaded_file = image
                    File.open(Rails.root.join('public', 'uploads', uploaded_file.original_filename), 'wb') do |file|
                        file.write(uploaded_file.read)
                    end
                    image_url = "http://localhost:3001/uploads/check_age/image/#{id}/#{uploaded_file.original_filename}"
                    ContactMailer.contact_email(id, email, image_url).deliver_now

                    render json: { userData_edit: true, message: "成功" }
                rescue ActiveRecord::RecordInvalid => e
                    render json: { userData_edit: false, message: "失敗" }
                end
            end
        else
            render json: {message: "failed"}
        end
    end

    private

    def verification_params
        params.permit(:user_id, :image)
    end
end

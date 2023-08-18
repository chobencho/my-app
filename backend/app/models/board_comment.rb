class BoardComment < ApplicationRecord
    # mount_uploader :image, ImageUploader
    belongs_to :user, optional: true
end  
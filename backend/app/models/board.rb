class Board < ApplicationRecord
    mount_uploader :image, ImageUploader
  
    belongs_to :user
    has_many :board_likes
    has_many :board_likes, foreign_key: :board_id
end
class Community < ApplicationRecord
    has_many :community_users
    belongs_to :community_category, foreign_key: 'category_id'
end  
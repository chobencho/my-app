class CommunityCategory < ApplicationRecord
    has_many :communities, foreign_key: 'category_id'
end

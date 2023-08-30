class CreateCommunityCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :community_categories do |t|
      t.string :community_code

      t.timestamps
    end
  end
end

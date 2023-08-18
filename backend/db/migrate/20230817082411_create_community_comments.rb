class CreateCommunityComments < ActiveRecord::Migration[7.0]
  def change
    create_table :community_comments do |t|
      t.string :community_id, :null => false
      t.string :user_id, :null => false
      t.text :body, :null => false
      t.text :image

      t.timestamps
    end
  end
end

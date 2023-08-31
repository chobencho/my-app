class CreateCommunityUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :community_users do |t|
      t.string :community_id, :null => false
      t.string :user_id, :null => false

      t.timestamps
    end
  end
end

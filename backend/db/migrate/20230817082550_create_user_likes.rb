class CreateUserLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_likes do |t|
      t.string :my_id, :null => false
      t.string :user_id, :null => false

      t.timestamps
    end
  end
end

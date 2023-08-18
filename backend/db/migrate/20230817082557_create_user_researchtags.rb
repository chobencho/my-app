class CreateUserResearchtags < ActiveRecord::Migration[7.0]
  def change
    create_table :user_researchtags do |t|
      t.string :user_id, :null => false
      t.string :tag_name, :null => false

      t.timestamps
    end
  end
end

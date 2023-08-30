class CreateUserHobbies < ActiveRecord::Migration[7.0]
  def change
    create_table :user_hobbies do |t|
      t.string :user_id, :null => false
      t.string :hobby_id, :null => false

      t.timestamps
    end
  end
end

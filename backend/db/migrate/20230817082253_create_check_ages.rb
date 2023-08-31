class CreateCheckAges < ActiveRecord::Migration[7.0]
  def change
    create_table :check_ages do |t|
      t.string :user_id, :null => false
      t.text :image

      t.timestamps
    end
  end
end

class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :user_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.text :image

      t.timestamps
    end
  end
end

class CreateBoardComments < ActiveRecord::Migration[7.0]
  def change
    create_table :board_comments do |t|
      t.string :board_id, null: false
      t.string :user_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end

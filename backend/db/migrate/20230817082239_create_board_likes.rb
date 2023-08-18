class CreateBoardLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :board_likes do |t|
      t.string :board_id, :null => false
      t.string :user_id, :null => false

      t.timestamps
    end
  end
end

class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :room_id, :null => false
      t.string :user_id, :null => false
      t.text :body, :null => false
      t.text :image

      t.timestamps
    end
  end
end

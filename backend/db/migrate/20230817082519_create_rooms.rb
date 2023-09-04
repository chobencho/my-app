class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :room_id, null: false

      t.timestamps
    end
  end
end

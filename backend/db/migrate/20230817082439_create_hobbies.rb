class CreateHobbies < ActiveRecord::Migration[7.0]
  def change
    create_table :hobbies do |t|
      t.string :hobby_code

      t.timestamps
    end
  end
end

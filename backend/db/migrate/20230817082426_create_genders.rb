class CreateGenders < ActiveRecord::Migration[7.0]
  def change
    create_table :genders do |t|
      t.string :gender_code

      t.timestamps
    end
  end
end

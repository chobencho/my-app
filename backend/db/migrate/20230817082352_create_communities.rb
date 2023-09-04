class CreateCommunities < ActiveRecord::Migration[7.0]
  def change
    create_table :communities do |t|
      t.string :category_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.text :image

      t.timestamps
    end
  end
end

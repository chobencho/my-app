class ChangeUserColumnImage < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :image, from: "no-image.jpg", to: nil
    change_column_null :users, :image, true
  end
end

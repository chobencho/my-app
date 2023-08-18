class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[7.0]
  def change
    
    create_table(:users) do |t|
      ## Required
      t.string :provider, :null => false, :default => "email"
      t.string :uid, :null => false, :default => ""

      ## Database authenticatable
      t.string :encrypted_password, :null => false, :default => ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, :default => false

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## User Info
      t.string :name, :null => false, :default => "NO NAME"
      t.string :image, :null => false, :default => "no-image.jpg"
      t.string :email

      t.string :body, :null => false, :default => "よろしくお願いします！"
      t.string :age, :null => false, :default => "22"
      t.string :gender_id, :null => false, :default => 1
      t.string :prefecture_id, :null => false, :default => 1
      t.string :grade_id, :null => false, :default => 1
      t.string :subject_id, :null => false, :default => 1
      t.string :birthplace_id, :null => false, :default => 1
      t.string :check_age, :null => false, :default => 0
      t.datetime :last_login


      ## Tokens
      t.text :tokens

      t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end

class User < ActiveRecord::Base
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :confirmable,
         :timeoutable,
         :lockable
  include DeviseTokenAuth::Concerns::User

  validate :password_complexity

  def password_complexity
    if password.blank? ||
         password =~
           /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,70}$/
      return
    end

    errors.add :password,
               "パスワードは長さ8~70文字、大文字1字以上、小文字1字以上、数字1字以上、特殊文字1字以上を含める必要があります。"
  end

  mount_uploader :image, ImageUploader

  has_many :boards
  belongs_to :prefecture,
             foreign_key: "prefecture_id",
             primary_key: "id",
             class_name: "Prefecture"
  belongs_to :subject,
             foreign_key: "subject_id",
             primary_key: "id",
             class_name: "Subject"
  belongs_to :grade,
             foreign_key: "grade_id",
             primary_key: "id",
             class_name: "Grade"
  belongs_to :gender,
             foreign_key: "gender_id",
             primary_key: "id",
             class_name: "Gender"
  belongs_to :birthplace, class_name: "Prefecture", foreign_key: "birthplace_id"
  has_many :user_hobbies
  has_many :hobbies, through: :user_hobbies
  has_many :user_interests
  has_many :interests, through: :user_interests
  has_many :user_researchtags
  has_many :board_comments
  has_many :community_comments
  has_many :messages
  has_many :user_likes, foreign_key: :user_id
  has_many :room_members
end

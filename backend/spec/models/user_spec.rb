# spec/models/user_spec.rb

require 'rails_helper'

RSpec.describe User, type: :model do
  describe "バリデーション" do
    let(:user) { FactoryBot.build(:user) }

    it "有効なファクトリを持つこと" do
      expect(user).to be_valid
    end

    it "名前がなければ無効であること" do
      user.name = nil
      expect(user).not_to be_valid
    end

    it "メールアドレスがなければ無効であること" do
      user.email = nil
      expect(user).not_to be_valid
    end

    it "重複したメールアドレスは無効であること" do
      FactoryBot.create(:user, email: user.email)
      expect(user).not_to be_valid
    end

    it "パスワードがなければ無効であること" do
      user.password = nil
      expect(user).not_to be_valid
    end

    # パスワードの複雑性に関するテストを追加することもできます
    it "パスワードが複雑性の要件を満たしていること" do
      user.password = "Complex123!@"
      expect(user).to be_valid
    end
  end

  # describe "関連付け" do
  #   it { should have_many(:boards) }
  #   # 他の関連付けに関するテストを追加することもできます
  # end
end

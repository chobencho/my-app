# spec/models/prefecture_spec.rb

require 'rails_helper'

RSpec.describe Prefecture, type: :model do
  it "has a valid factory" do
    expect(FactoryBot.build(:prefecture)).to be_valid
  end

  it "is not valid without a prefecture_code" do
    prefecture = FactoryBot.build(:prefecture, prefecture_code: nil)
    expect(prefecture).not_to be_valid
  end

  it "is valid with a prefecture_code" do
    prefecture = FactoryBot.build(:prefecture, prefecture_code: "01")
    expect(prefecture).to be_valid
  end
end

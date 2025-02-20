class Post < ApplicationRecord
  validates :content, presence: true, length: {maximum: 65_535}
  validates :user_id, presence: true
  belongs_to :user
  has_many :favorites, dependent: :destroy
end

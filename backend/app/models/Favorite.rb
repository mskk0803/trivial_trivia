class Favorite < ApplicationRecord

  belongs_to :user
  belongs_to :post

  validates :user_id, presence: true
  validates :post_id, presence: true

  # scope:ユニーク制約
  validates :user_id, uniqueness: {scope: :post_id}
end

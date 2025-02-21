class AddIndexToFavorite < ActiveRecord::Migration[7.1]
  def change
    add_index :favorites, [:user_id, :post_id], unique: true
  end
end

class ChangeColumnToPost < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :user_id, :bigint, null: false
  end
end

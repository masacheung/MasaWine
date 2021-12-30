class ChangeWines < ActiveRecord::Migration[5.2]
  def change
    change_column :wines, :winery_id, :string
  end
end

class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.string :wine_full, null: false
      t.integer :vintage, null: false
      t.string :color, null: false
      t.string :country, null: false
      t.string :region, null: false
      t.string :alternate_bottle_size
      t.integer :winery_id, null: false

      t.timestamps
    end

    add_index :wines, [:wine_full, :winery_id], unique: true
  end
end

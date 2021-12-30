class CreateTastingNote < ActiveRecord::Migration[5.2]
  def change
    create_table :tasting_notes do |t|
      t.string :username, null: false
      t.string :title
      t.text :body
      t.integer :wine_id, null: false

      t.timestamps
    end

    add_index :tasting_notes, :wine_id
  end
end

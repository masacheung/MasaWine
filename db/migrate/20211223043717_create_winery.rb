class CreateWinery < ActiveRecord::Migration[5.2]
  def change
    create_table :wineries do |t|
      t.string :name, null: false
      t.string :country, null: false
    end

    add_index :wineries, [:name, :country], unique: true
  end
end

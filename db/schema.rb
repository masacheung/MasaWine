# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_30_231031) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tasting_notes", force: :cascade do |t|
    t.string "username", null: false
    t.string "title"
    t.text "body"
    t.integer "wine_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["wine_id"], name: "index_tasting_notes_on_wine_id"
  end

  create_table "wineries", force: :cascade do |t|
    t.string "name", null: false
    t.string "country", null: false
    t.index ["name", "country"], name: "index_wineries_on_name_and_country", unique: true
  end

  create_table "wines", force: :cascade do |t|
    t.string "wine_full", null: false
    t.integer "vintage", null: false
    t.string "color", null: false
    t.string "country", null: false
    t.string "region", null: false
    t.string "alternate_bottle_size"
    t.string "winery_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["wine_full", "winery_id"], name: "index_wines_on_wine_full_and_winery_id", unique: true
  end

end

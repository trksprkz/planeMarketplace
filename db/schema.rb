# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_04_165451) do
  create_table "planes", force: :cascade do |t|
    t.string "name", null: false
    t.integer "price", null: false
    t.text "location", null: false
    t.string "image", default: "https://media.sandhills.com/img.axd?id=6133917095&wid=&rwl=False&p=&ext=&w=0&h=0&t=&lp=7&c=True&wt=False&sz=Max&rt=0&checksum=pBVO8BXW0QetH%2FGn%2FpChF%2FRzEglFJF45"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

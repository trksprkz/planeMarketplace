class CreatePlanes < ActiveRecord::Migration[7.0]
  def change
    create_table :planes do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :location, null: false
      t.string :image, default: 'https://media.sandhills.com/img.axd?id=6133917095&wid=&rwl=False&p=&ext=&w=0&h=0&t=&lp=7&c=True&wt=False&sz=Max&rt=0&checksum=pBVO8BXW0QetH%2FGn%2FpChF%2FRzEglFJF45'

      t.timestamps
    end
  end
end

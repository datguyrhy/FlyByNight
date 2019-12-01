class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.text :country
      t.string :location_name
      t.string :description
      t.string :img_url
      t.timestamps
    end
  end
end

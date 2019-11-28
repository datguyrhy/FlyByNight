class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :country
      t.string :name
      t.date :date
      t.string :session
      t.references :plan
      t.timestamps
    end
  end
end

class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :country
      t.string :name
      t.datetime :start_date
      t.datetime :start_time
      t.datetime :end_time
      t.string :session
      t.string :notes
      t.references :plan
      t.references :user
      t.timestamps
    end
  end
end

class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.integer :client_city_id
      t.string :city
      t.string :country
      t.integer :all_buildings
      t.integer :one_hundred
      t.integer :one_hundred_fifty
      t.integer :two_hundred
      t.integer :three_hundred
      t.integer :telecom_towers
      t.integer :all_structures

      t.timestamps
    end
  end
end

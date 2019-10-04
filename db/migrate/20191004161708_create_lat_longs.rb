class CreateLatLongs < ActiveRecord::Migration[6.0]
  def change
    create_table :lat_longs do |t|

      t.timestamps
    end
  end
end

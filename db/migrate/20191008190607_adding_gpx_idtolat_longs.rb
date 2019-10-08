class AddingGpxIdtolatLongs < ActiveRecord::Migration[6.0]
  def change
    add_column :lat_longs, :gpx_id, :integer
  end
end

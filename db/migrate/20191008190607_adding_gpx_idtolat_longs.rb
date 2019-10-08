class AddingGpxIdtolatLongs < ActiveRecord::Migration[6.0]
  def change
    add_column :lat_longs, :gpx_id, :integer
    add_column :lat_longs, :chart_title, :string
    add_column :lat_longs, :size, :integer
  end
end

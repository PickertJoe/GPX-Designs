class LatLongsController < ApplicationController
  before_action :set_gpx, only: [:index, :new, :create]
  before_action :set_lat_long, only: [:edit, :update, :destroy]

  def new
    @lat_long = @gpx.lat_long.build
  end

  def index
    @lat_longs = @gpx.lat_longs
  end

  def create
    @lat_long = @gpx.lat_long.build(lat_long_params)

    respond_to do |format|
      if @lat_long.save
        @lat_long.data.attach(@gpx.file.blob)
        format.html { redirect_to gpx_lat_longs_path }
      else
        format.html { redner :new }
      end
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
   def lat_long_params
   end

   def set_gpx
   end

   def set_lat_long
   end

end

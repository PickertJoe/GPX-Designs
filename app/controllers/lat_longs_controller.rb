class LatLongsController < ApplicationController
  before_action :set_gpx, only: [:index, :new, :create]
  before_action :set_lat_long, only: [:show, :edit, :update, :destroy]

  def new
    @lat_long = @gpx.lat_long.build
  end

  def index
    @lat_longs = @gpx.lat_long
  end

  def create
    @lat_long = @gpx.lat_long.build(lat_long_params)

    respond_to do |format|
      if @lat_long.save
        @lat_long.data.attach(@gpx.file.blob)
        format.html { redirect_to lat_long_path(@lat_long) }
      else
        flash.now[:alert] = "Could not create new topographic map"
        format.html { render :new }
      end
    end
  end

  def show
    gon.data = url_for(@lat_long.data)
  end


  def edit
  end

  def update
    respond_to do |format|
      if @lat_long.update(lat_long_params)
        format.html { redirect_to lat_long_path(@lat_long) }
      else
        flash.now[:alert] = "Could not update topographic map file"
        format.html { render :edit }
        end
      end
  end

  def destroy
    @lat_long.destroy
    respond_to do |format|
      format.html { redirect_to gpx_lat_longs_path(@lat_long.gpx_id), notice: "Your topographic map has been successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
   def lat_long_params
    params.require(:lat_long).permit(:chart_title, :size, :gpx_id, :data)
   end

   def set_gpx
    @gpx = Gpx.find(params[:gpx_id])
   end

   def set_lat_long
    @lat_long = LatLong.find(params[:id])
   end

end

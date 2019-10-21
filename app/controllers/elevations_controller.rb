class ElevationsController < ApplicationController
  def new
    @elevation = @gpx.elevation.build
  end

  def create
    @elevation = @gpx.elevation.build(elevation_params)

    if @gpx.save
      redirect_to user_gpxes_path
    else
      redirect_to new_user_gpx_path
    end
  end




  private
    def elevation_params
      params.require(:gpx).permit(:title,:x_title, :y_title, :gpx_id, :size)
    end

end

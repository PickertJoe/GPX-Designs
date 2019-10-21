class ElevationsController < ApplicationController
  before_action :set_gpx


  def new
    @elevation = @elevation.gpx.build
  end

  def create
    @elevation = @elevation.gpx.build(elevation_params)

    if @elevation.save
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

class ElevationsController < ApplicationController
  before_action :set_gpx, only: [:index, :new]


  def new
    @elevation = @gpx.elevation.build
  end

  def create
    @elevation = @gpx.elevation.build(elevation_params)

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

    def set_gpx
      @gpx = Gpx.find(params[:gpx_id])
    end

end

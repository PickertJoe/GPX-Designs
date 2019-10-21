class ElevationsController < ApplicationController
  before_action :set_gpx, only: [:index, :new, :create]
  before_action :set_elevation, only: [:show, :edit, :update, :destroy]



  def new
    @elevation = @gpx.elevation.build
  end

  def create
    @elevation = @gpx.elevation.build(elevation_params)

    if @elevation.save
      redirect_to user_gpxes_path(current_user)
    else
      redirect_to new_gpx_elevation_path
    end
  end

  def edit
  end

  def update
    @elevation.update(elevation_params)
    if @elevation.save
      redirect_to user_gpxes_path(current_user)
    else
      redirect_to edit_elevation_path
    end
  end

  def destroy
    @elevation.destroy
    redirect_to user_gpxes_path(current_user), notice: "Your gpx file has been successfully deleted."
  end

  private
    def elevation_params
      params.require(:elevation).permit(:chart_title,:x_title, :y_title, :gpx_id, :size)
    end

    def set_gpx
      @gpx = Gpx.find(params[:gpx_id])
    end

    def set_elevation
      @elevation = Elevation.find(params[:id])
    end

end

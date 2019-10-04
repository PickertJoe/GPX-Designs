class GpxesController < ApplicationController
  def new
    @gpx = GPX.new
  end

  def create
    @gpx = GPX.new(gpx_params)

    if @gpx.save
      redirect_to user_path(current_user)
    else
      redirect_to gpx_new

    end
  end

  def gpx_params
    params.require(:gpx).permit(:name,:activity, :file)
  end
end

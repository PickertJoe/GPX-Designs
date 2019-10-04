class GpxesController < ApplicationController
  def new
    @gpx = Gpx.new
  end

  def create
    @gpx = Gpx.new(gpx_params)

    if @gpx.save!
      root_path
    else
      redirect_to new_gpx_path

    end
  end

  def gpx_params
    params.require(:gpx).permit(:name,:activity, :file)
  end
end

class ElevationsController < ApplicationController
  def new
    @elevation = @gpx.elevation.build
  end

end

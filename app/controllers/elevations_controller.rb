class ElevationsController < ApplicationController
  before_action :set_gpx, only: [:index, :new, :create]
  before_action :set_elevation, only: [:edit, :update, :destroy]

  def new
    @elevation = @gpx.elevation.build
  end

  def index
    @elevations = @gpx.elevation
  end

  def create
    @elevation = @gpx.elevation.build(elevation_params)

    respond_to do |format|
      if @elevation.save
        @elevation.data.attach(@gpx.file.blob)
        format.html { redirect_to gpx_elevations_path }
      else
        format.hmtl { render :new }
      end
    end
  end

  def show
    Daru::View.plotting_library = :highcharts
    @elevation = Elevation.find(params[:id])
    @data = @elevation.parse

    @opts = {
      chart: {defaultSeriesType: 'line'},
      title: {
        text: @elevation.chart_title
        },

      xAxis: {
        title:{
          text: @elevation.x_title
        }
      },

      yAxis: {
        title: {
          text: @elevation.y_title
        }
      }

    }

    # series_dt = @elevation.parse


    # @elev_graph = Daru::View::Plot.new(series_dt, opts)
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
      params.require(:elevation).permit(:chart_title,:x_title, :y_title, :gpx_id, :size, :data)
    end

    def set_gpx
      @gpx = Gpx.find(params[:gpx_id])
    end

    def set_elevation
      @elevation = Elevation.find(params[:id])
    end

end

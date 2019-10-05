class GpxesController < ApplicationController
  before_action :set_user
  before_action :set_gpx, only: [:show, :edit, :update, :destroy]

  def index
    @gpxes = @user.gpxes

  def new
    @gpx = @user.gpx.build
  end

  def edit
  end

  def create
    @gpx = @user.gpx.build(gpx_params)

    if @gpx.save
      redirect_to user_gpxes_path
    else
      redirect_to new_user_gpx_path
    end
  end

  def update
    @gpx.udate(gpx_params)
    if @gpx.save
      redirect_to user_gpxes_path
    else
      redirect_to edit_user_gpx_path
    end
  end

  def destroy
    @gpx.destroy
    redirect_to user_gpxes_path, notice: "Your gpx file has been successfully deleted."

  private
    def set_user
      @user = User.find(params[:user_id])
    end

    def set_gpx
      @gpx = @user.gpxes.find(params[:id])
    end

    def gpx_params
      params.require(:gpx).permit(:name,:activity, :file, :user_id)
    end
end

class GpxesController < ApplicationController
  before_action :get_user

  def new
    @gpx = @user.gpx.build
  end

  def create
    @gpx = @user.gpx.build(gpx_params)

    if @gpx.save
      redirect_to root_path
    else
      redirect_to new_user_gpx_path

    end
  end

  def gpx_params
    params.require(:gpx).permit(:name,:activity, :file, :user_id)
  end

  private
    def get_user
      @user = User.find(params[:user_id])
    end
end

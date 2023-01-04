class Api::V1::PlanesController < ApplicationController
  before_action :set_plane, only: %i[show destroy]

  def index
    plane = Plane.all.order(created_at: :desc)
    render json: plane
  end

  def create
    plane - Plane.create!(plane_params)
    if plane
      render json: plane
    else
      render json: plane.errors
    end
  end

  def show
    render json: @plane
  end

  def destroy
    @plane&.destroy
    render json: { message: 'Plane listing deleted!' }
  end

  private

  def plane_params
    params.permit(:name, :image, :price, :location)
end

  def set_plane
    @plane = Plane.find(params[:id])
  end
end

class AirplanesController < ApplicationController
	
	def index
		render json: Airplane.all
	end

	def create
		@plane = Airplane.create(plane_params)
		render json: @plane
	end

	private

	def plane_params
		params.require(:airplane).permit(:name, :rows, :columns)
	end


end

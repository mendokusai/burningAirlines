class FlightsController < ApplicationController

def index
	render json: Flight.all
end

def create
	@flight = Flight.create(flight_params)
	render json: @flight
end

private

def flight_params
	params.require(:flight).permit(:origin, :destination, :date, :plane)
end

end

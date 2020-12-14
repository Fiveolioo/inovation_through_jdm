class CarsController < ApplicationController
    def index
        cars = Car.all
        render json: cars, except: [:created_at, :updated_at]
    end

    def show
        car = Car.find_by(id: params[:id])
        if car
            render json: cars, except: [:created_at, :updated_at]
        else
            render json: {message: "Car not found :("}
        end
    end
end
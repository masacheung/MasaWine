class Api::WinesController < ApplicationController

    def index
        @wines = Wine.all
        render :index
    end

    def show
        @wine = Wine.find(params[:id])
        render :show
    end

    def create 
        @wine = Wine.new(wine_params)

        if @wine.save
            render :show
        else
            render json: @wine.errors.full_messages, status: 422
        end
    end

    def update
        @wine = Wine.find(params[:id])

        if @wine.update(wine_params)
            render :show
        else
            render json: @wine.errors.full_messages, status: 422
        end
    end

    def destroy
        @wine = Wine.find(params[:id])

        if @wine.destroy
            render :show
        else
            render json: @wine.errors.full_messages, status: 422
        end
    end

    private
    def wine_params
        params.require(:wine).permit(:wine_full, :vintage, :color, :country, :region, :alternate_bottle_size, :winery_id)
    end

end
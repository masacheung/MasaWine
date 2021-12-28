class Api::WineriesController < ApplicationController

    def index
        @wineries = Winery.all
        render :index
    end

    def show
        @winery = Winery.find(params[:id])
        render :show
    end

    def create
        @winery = Winery.new(winery_params)

        if @winery.save
            render :show
        else
            render json: @winery.errors.full_messages, status: 422
        end
    end

    def update
        @winery = Winery.find(params[:id])

        if @winery.update(winery_params)
            render :show
        else
            render json: @winery.errors.full_messages, status: 422
        end
    end

    def destroy
        @winery = Winery.find(params[:id])

        if @winery.destroy
            render :show
        else
            render json: @winery.errors.full_messages, status: 422
        end
    end

    private
    def winery_params
        params.require(:winery).permit(:name, :country)
    end

end
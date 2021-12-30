class Api::TastingNotesController < ApplicationController

    def index
        @tasting_notes = TastingNote.all
        render :index
    end

    def show
        @tasting_note = TastingNote.find(params[:id])
        render :show
    end

    def create
        @tasting_note = TastingNote.new(note_params)
        
        if @tasting_note.save
            render :show
        else
            render json: @tasting_note.errors.full_messages, status: 422
        end
    end

    def destroy
        @tasting_note = TastingNote.find(params[:id])

        if @tasting_note.destroy
            render :show
        else
            render json: @tasting_note.errors.full_messages, status: 422
        end
    end

    private
    def note_params
        params.require(:tastingnote).permit(:username, :title, :body, :wine_id)
    end
end

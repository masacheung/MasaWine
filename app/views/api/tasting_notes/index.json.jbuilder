@tasting_notes.each do |tasting_note|
    json.set! tasting_note.id do
        json.partial! 'tasting_note', tasting_note: tasting_note
    end
end
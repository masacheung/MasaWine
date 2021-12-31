export const fetchTastingNotes = () => {
    return $.ajax({
        url: "api/tasting_notes",
        method: "GET"
    })
}

export const fetchTastingNote = (tasting_noteId) => {
    return $.ajax({
        url: `api/tasting_notes/${tasting_noteId}`,
        method: "GET"
    })
}

export const createTastingNote = (tasting_note) => {
    return $.ajax({
        url: "api/tasting_notes",
        method: "POST",
        data: {tasting_note}
    })
}

export const deleteTastingNote = (tasting_noteId) => {
    return $.ajax({
        url: `api/tasting_notes/${tasting_noteId}`,
        method: "DELETE"
    })
}
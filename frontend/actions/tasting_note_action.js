import * as TastingNoteApiUtil from "../util/tasting_note_api_util";

export const RECEIVE_TASTINGNOTES = "RECEIVE_TASTINGNOTES";
export const RECEIVE_TASTINGNOTE = "RECEIVE_TASTINGNOTE";
export const REMOVE_TASTINGNOTE = "REMOVE_TASTINGNOTE";

const receiveTastingNotes = (tasting_notes) => ({
    type: RECEIVE_TASTINGNOTES,
    tasting_notes
})

const receiveTastingNote = (tasting_note) => ({
    type: RECEIVE_TASTINGNOTE,
    tasting_note
})

const removeTastingNote = (tasting_noteId) => ({
    type: REMOVE_TASTINGNOTE,
    tasting_noteId
})

export const fetchTastingNotes = () => (dispatch) => {
    return TastingNoteApiUtil.fetchTastingNotes()
        .then(tasting_notes => dispatch(receiveTastingNotes(tasting_notes)))
}

export const fetchTastingNote = (tasting_noteId) => (dispatch) => {
    return TastingNoteApiUtil.fetchTastingNote(tasting_noteId)
        .then((tasting_note) => dispatch(receiveTastingNote(tasting_note)))
}

export const createTastingNote = (tasting_note) => (dispatch) => {
    return TastingNoteApiUtil.createTastingNote(tasting_note)
        .then(tasting_note => dispatch(receiveTastingNote(tasting_note)))
}

export const deleteTastingNote = (tasting_noteId) => (dispatch) => {
    return TastingNoteApiUtil.deleteTastingNote(tasting_noteId)
        .then(() => dispatch(removeTastingNote(tasting_noteId)))
}
import { RECEIVE_TASTINGNOTES, RECEIVE_TASTINGNOTE, REMOVE_TASTINGNOTE } from "../actions/tasting_note_action";

const tastingNoteReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_TASTINGNOTES:
            return action.tasting_notes;
        case RECEIVE_TASTINGNOTE:
            newState[action.tasting_note.id] = action.tasting_note;
            return newState;
        case REMOVE_TASTINGNOTE:
            delete newState[action.tasting_noteId];
            return newState;
        default:
            return state;
    }
}

export default tastingNoteReducer;
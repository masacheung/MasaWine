import { connect } from 'react-redux';
import { fetchWines } from '../../actions/wine_action';
import { fetchTastingNotes, createTastingNote, deleteTastingNote } from '../../actions/tasting_note_action';
import WineShow from "./wine_show";

const mSTP = (state, ownProps) => {
    return {
        wine: state.entities.wines[ownProps.match.params.wineId],
        wines: Object.values(state.entities.wines),
        tasting_notes: Object.values(state.entities.tasting_notes)
    }
}

const mDTP = dispatch => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        fetchTastingNotes: () => dispatch(fetchTastingNotes()),
        createTastingNote: (tasting_note) => dispatch(createTastingNote(tasting_note)),
        deleteTastingNote: (tasting_noteId) => dispatch(deleteTastingNote(tasting_noteId))
    }
}

export default connect(mSTP, mDTP)(WineShow);
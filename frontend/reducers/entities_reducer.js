import { combineReducers } from "redux";
import wineriesReducer from "./wineries_reducer";
import winesReducer from "./wines_reducer";
import tastingNoteReducer from "./tasting_notes_reducer";

const entitiesReducer = combineReducers({
    wineries: wineriesReducer,
    wines: winesReducer,
    tasting_notes: tastingNoteReducer
})

export default entitiesReducer;
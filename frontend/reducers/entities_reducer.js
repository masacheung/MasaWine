import { combineReducers } from "redux";
import wineriesReducer from "./wineries_reducer";
import winesReducer from "./wines_reducer";

const entitiesReducer = combineReducers({
    wineries: wineriesReducer,
    wines: winesReducer
})

export default entitiesReducer;
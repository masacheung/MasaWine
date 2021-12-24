import { combineReducers } from "redux";
import wineriesReducer from "./wineries_reducer";

const entitiesReducer = combineReducers({
    wineries: wineriesReducer
})

export default entitiesReducer;
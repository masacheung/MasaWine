import { RECEIVE_WINES, RECEIVE_WINE, REMOVE_WINE } from "../actions/wine_action";

const winesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_WINES:
            return action.wines;
        case RECEIVE_WINE:
            newState[action.wine.id] = action.wine
            return newState;
        case REMOVE_WINE:
            delete newState[action.wineId];
            return newState;
        default:
            return state;
    }
}

export default winesReducer;
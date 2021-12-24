import { RECEIVE_WINERIES, RECEIVE_WINERY, REMOVE_WINERY } from "../actions/winery_actions";

const wineriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_WINERIES:
            return action.wineries;
        case RECEIVE_WINERY:
            newState[action.winery.id] = action.winery
            return newState;
        case REMOVE_WINERY:
            delete newState[action.wineryId];
            return newState;
        default:
            return state;
    }
}

export default wineriesReducer;
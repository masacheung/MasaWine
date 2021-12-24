import * as WineryApiUtil from '../util/winery_api_util';

export const RECEIVE_WINERIES = "RECEIVE_WINERIES";
export const RECEIVE_WINERY = "RECEIVE_WINERY";
export const REMOVE_WINERY = "REMOVE_WINERY";

const receiveWineries = (wineries) => ({
    type: RECEIVE_WINERIES,
    wineries
})

const receiveWinery = (winery) => ({
    type: RECEIVE_WINERY,
    winery
})

const removeWinery = (wineryId) => ({
    type: REMOVE_WINERY,
    wineryId
})

export const fetchWineries = () => (dispatch) => {
    return WineryApiUtil.fetchWineries()
        .then(wineries => dispatch(receiveWineries(wineries)))
}

export const fetchWinery = (wineryId) => (dispatch) => {
    return WineryApiUtil.fetchWinery(wineryId)
        .then(winery => dispatch(receiveWinery(winery)))
}

export const createWinery = (winery) => (dispatch) => {
    return WineryApiUtil.createWinery(winery)
        .then(winery => dispatch(receiveWinery(winery)))
}

export const updateWinery = (winery) => (dispatch) => {
    return WineryApiUtil.updateWinery(winery)
        .then(winery => dispatch(receiveWinery(winery)))
}

export const deleteWinery = (wineryId) => (dispatch) => {
    return WineryApiUtil.deleteWinery(wineryId)
        .then(() => dispatch(removeWinery(wineryId)))
}
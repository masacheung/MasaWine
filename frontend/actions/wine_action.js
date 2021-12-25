import * as WineApiUtil from '../util/wine_api_util';

export const RECEIVE_WINES = "RECEIVE_WINES";
export const RECEIVE_WINE = "RECEIVE_WINE";
export const REMOVE_WINE = "REMOVE_WINE";

const receiveWines = (wines) => ({
    type: RECEIVE_WINES,
    wines
})

const receiveWine = (wine) => ({
    type: RECEIVE_WINE,
    wine
})

const removeWine = (wineId) => ({
    type: REMOVE_WINE,
    wineId
})

export const fetchWines = () => (dispatch) => {
    return WineApiUtil.fetchWines()
        .then(wines => dispatch(receiveWines(wines)))
}

export const fetchWine = (wineId) => (dispatch) => {
    return WineApiUtil.fetchWine(wineId)
        .then(wine => dispatch(receiveWine(wine)))
}

export const createWine = (wine) => (dispatch) => {
    return WineApiUtil.createWine(wine)
        .then(wine => dispatch(receiveWine(wine)))
}

export const updateWine = (wine) => (dispatch) => {
    return WineApiUtil.updateWine(wine)
        .then(wine => dispatch(receiveWine(wine)))
}

export const deleteWine = (wineId) => (dispatch) => {
    return WineApiUtil.deleteWine(wineId)
        .then(() => dispatch(removeWine(wineId)))
}
export const fetchWines = () => {
    return $.ajax({
        url: "api/wines",
        method: 'GET'
    })
}

export const fetchWine = (wineId) => {
    return $.ajax({
        url: `api/wines/${wineId}`,
        method: 'GET'
    })
}

export const createWine = (wine) => {
    return $.ajax({
        url: "api/wines",
        method: 'POST',
        data: {wine}
    })
}

export const updateWine = (wine) => {
    return $.ajax({
        url: `api/wines/${wine.id}`,
        method: 'PATCH',
        data: {wine}
    })
}

export const deleteWine = (wineId) => {
    return $.ajax({
        url: `api/wines/${wineId}`,
        method: 'DELETE'
    })
}
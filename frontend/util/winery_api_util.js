export const fetchWineries = () => {
    return $.ajax({
        url: "/api/wineries",
        method: 'GET'
    })
}

export const fetchWinery = (wineryId) => {
    return $.ajax({
        url: `/api/wineries/${wineryId}`,
        method: 'GET'
    })
}

export const createWinery = (winery) => {
    return $.ajax({
        url: "/api/wineries",
        method: 'POST',
        data: {winery}
    })
}

export const updateWinery = (winery) => {
    return $.ajax({
        url: `/api/wineries/${winert.id}`,
        method: 'PATCH',
        data: {winery}
    })
}

export const deleteWinery = (wineryId) => {
    return $.ajax({
        url: `/api/wineries/${wineryId}`,
        method: 'DELETE'
    })
}
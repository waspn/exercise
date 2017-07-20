export const addFeed = (data) => {
    return {
        type: 'ADD_FEED',
        payload: data
    }
}

export const deleteFeed = (key) => {
    return {
        type: 'DELETE_FEED',
        key
    }
}
export const addFeed = (data) => {
    return {
        type: 'ADD_FEED',
        payload: data
    }
}

export const editFeed = (data,key) => {
    return {
        type: 'EDIT_FEED',
        payload: data,
        key
    }
}

export const deleteFeed = (key) => {
    return {
        type: 'DELETE_FEED',
        key
    }
}
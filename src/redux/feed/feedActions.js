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

export const fetchFeedRequest = () => ({
    type: 'FETCH_FEED_REQUEST'
})
export const fetchFeedSuccess = (payload) => ({
    type: 'FETCH_FEED_SUCCESS',
    payload
})
export const fetchFeedFailure = (error) => ({
    type: 'FETCH_FEED_FAILURE',
    error
})
export const fetchFeed = () => (dispatch, getState) => { 
    dispatch(fetchFeedRequest())
    const url = 'http://localhost:3000/data/feed.json'
    fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(fetchFeedSuccess(res.data)))
        .catch((error) => dispatch(fetchFeedFailure(error)))
}

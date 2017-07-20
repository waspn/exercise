const initialState = {
    data: [],
    isFetching: false,
    error: false
}


const feedReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEED' : 
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }
        case 'EditFeed' : 
        return [
            //edit case
        ]
        case 'DELETE_FEED' : 
        return {
            ...state,
            data: state.data.filter((el) => {
                return el.newsid !== action.key
            })
        }
        default: return state
    }
}

export default feedReducers
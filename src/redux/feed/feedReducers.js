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
        case 'EDIT_FEED' : 
        return {
            ...state,
            data:
                state.data.map((item,newsid) => {
                    if(newsid !== action.key) {
                        return{
                            ...item
                        }
                    }

                    return{
                        ...item,
                        ...action.payload
                    }
                })
                    // state.data.forEach((el,newsid) => {
                    // if(el.newsid === action.key) {
                    //     el.topic = action.payload.topic
                    //     el.description = action.payload.description
                    // }
        }
        case 'DELETE_FEED' : 
        return {
            ...state,
            data: state.data.filter((el) => {
                return el.newsid !== action.key
            })
        }
        //reducers for fetching data from json
        case 'FETCH_FEED_REQUEST' :
        return {
            ...state,
            isFetching: true

        }
        case 'FETCH_FEED_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isFetching: false
        }
        case 'FETCH_FEED_FAILURE' :
        return {
            ...state,
            isFetching: false,
            error: 'Failed'

        }
        default: return state
    }
}

export default feedReducers
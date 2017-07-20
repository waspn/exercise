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
        default: return state
    }
}

export default feedReducers
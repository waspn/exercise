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
            data: state.data.forEach((element,id) => {
                if(element.id === action.key) {
                    console.log(element.id)
                    console.log(action.key)
                }
            })
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
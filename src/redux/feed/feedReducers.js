const initialState = {
	data: [],
	isFetching: false,
	error: false
}


const feedReducers = (state = initialState, action) => {
	switch(action.type) {
		// in synchronous - there is 'REQUEST' and only one case 'SUCCESS'
		// in aynschronous will be divided into 'FAILURE' and 'SUCCESS'
		case 'ADD_FEED_REQUEST' :
		return {
				...state,
				isAdding: true
				// 'loading' or 'adding' when this stat is true
		}
		case 'ADD_FEED_SUCCESS' : 
		return {
				...state,
				data: [
						...state.data,
						action.payload
				],
				isAdding: false,
		}
		case 'ADD_FEED_FAILURE' :
		return {
			...state,
			isAdding: false,
			addError: 'addfailed'
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
		case 'DELETE_FEED_REQUEST' :
		return {
			...state,
			isDeleting: true
		}
		case 'DELETE_FEED_SUCCESS' :
		return {
			...state,
			data: state.data.filter((el) => {
					return el.newsid !== action.key
			}),
			isDeleting: false
		}
		case 'DELETE_FEED_FAILURE' :
		return {
			...state,
			isDeleting: false,
			deleteError: 'deletefailed'
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
			fetchError: 'fetchfailed'

		}
		default: return state
	}
}

export default feedReducers
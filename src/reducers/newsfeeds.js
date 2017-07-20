const newsfeeds = (state = [], action) => {
    switch(action.type) {
        case 'AddFeed' : return [
            
        ]
        case 'EditFeed' : return [
            //edit case
        ]
        case 'DeleteFeed' : return [
            //delete case
        ]
        default: return state
    }
}

export default newsfeeds
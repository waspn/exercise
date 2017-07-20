let newsId = 0
export const addNews = feed => {
    return {
        type: 'AddFeed',
        feed: {
            id: newsId++,
            topic: topic,
            detail: detail
        }
    }
}

export const editNews = (feed,key) => {
    return {
        type: 'EditFeed',
        feed: {
            id: key,
            topic: topic,
            detail: detail
        }
    }
}

export const deleteNews = key => {
    return {
        type: 'DeleteFeed',
        feed: {
            id: key
        }
    }
}
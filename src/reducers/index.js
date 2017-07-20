import { combineReducers } from 'redux'
import newsfeeds from './newsfeeds'

const feedManage = combineReducers({
    newsfeeds
})

export default feedManage
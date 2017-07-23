import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducers'
import { connect, Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import logger from 'redux-logger'

import './css/bootstrap.min.css'
import './fonts/glyphicons-halflings-regular.eot'

//import feedManage from './reducers'

import App from './App'
import Home from './view/pages/home'
import Feed from './view/pages/feed'
import Login from './view/pages/login'
import About from './view/pages/about'

import registerServiceWorker from './registerServiceWorker';

const middleWares = [thunk, logger]
const storeEnchanters = [
    applyMiddleware(...middleWares)
]
const finalCreateStore = compose(...storeEnchanters)(createStore)
const configureStore = (initialState) => {
    return finalCreateStore(rootReducer, initialState)
}

//let store = createStore(feedManage)

ReactDOM.render(
    <Provider store={configureStore()} >
        <Router>
            <div>
                <Route path='/' component={App} />
                <Route path='/home' component={Home} />
                <Route path='/feed' component={Feed} />
                <Route path='/login' component={Login} />
                <Route path='/about' component={About} />
                <Redirect from='/' to='home' />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();

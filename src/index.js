import React from 'react'
import ReactDOM from 'react-dom'
import './css/bootstrap.min.css'
import './fonts/glyphicons-halflings-regular.eot'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Home from './view/pages/home'
import Feed from './view/pages/feed'
import Login from './view/pages/login'
import About from './view/pages/about'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path='/' component={App} />
            <Route path='/home' component={Home} />
            <Route path='/feed' component={Feed} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={About} />
            <Redirect from='/' to='feed' />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();

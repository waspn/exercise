import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//default path leads to index.js in each folder

import Home from './pages/home'
import Feed from './pages/feed'
import Login from './pages/login'
import About from './pages/about'

class Routes extends Component {
    render() {
        return
        (
            <div>
            <Router>
                <div>
                    {/* <Route exact path='/' component={App} /> */}
                    <Route exact path='/home' component={Home} />
                    <Route path='/feed' component={Feed} />
                    <Route path='/login' component={Login} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
            </div>
        )
    }
}

export default Routes
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Topics from './topics'
import Navigation from './navigation'
import Header from './header'
import './App.styl'

const App = () => (
    <Router>
        <div>
            <Header/>
            <Navigation/>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)

export default App

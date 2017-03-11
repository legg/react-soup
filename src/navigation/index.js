import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.styl'

const Navigation = () => (
    <nav>
        <ul>
            <li><Link className="button" to="/">Home</Link></li>
            <li><Link className="button" to="/about">About</Link></li>
            <li><Link className="button" to="/topics">Topics</Link></li>
        </ul>
    </nav>
)

export default Navigation

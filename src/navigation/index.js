import React from 'react'
import './Navigation.styl'
import Link from './RLink'

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

export {Link}
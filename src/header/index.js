import React from 'react'
import './Header.styl'

const Header = () => (
    <header>
        <h1>React Soup</h1>
        <blockquote>
            <p><em>A boilerplate of bolt-ons for react, using...</em></p>
        </blockquote>
        <ul>
            <li>Create-react-app</li>
            <li>Stylus-loader and milligram-stylus</li>
            <li>React-router</li>
        </ul>
    </header>
)

export default Header
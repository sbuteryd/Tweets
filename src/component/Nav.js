import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
                <NavLink className='nav-home' to="/">Home</NavLink>
                <NavLink className='nav-new' to="/new">New Tweet</NavLink>
        </div>
    )
}

export default Nav
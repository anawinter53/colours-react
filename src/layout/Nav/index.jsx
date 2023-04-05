import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

export default function Nav() {
    let activeStyle = {
        colour: "blue"
    }

    return (
        <>
            <nav>
                <h1>Colours!</h1>
                <ul className='nav-links'>
                    <NavLink to='/' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                    <NavLink to='/about' style={({isActive}) => (isActive ? activeStyle : undefined)}>About</NavLink>
                    <NavLink to='/colours' style={({isActive}) => (isActive ? activeStyle : undefined)}>Colours</NavLink>
                </ul>
            </nav>
            <Outlet />
        </>
    )




}

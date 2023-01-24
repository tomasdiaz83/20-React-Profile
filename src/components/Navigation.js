import * as React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <NavLink 
                to="/"
                style={({ isActive }) =>
                    isActive ? {color: 'blue'} : undefined
                }
            >
                <p>About</p>
            </NavLink>
            <NavLink 
                to="/projects"
                style={({ isActive }) =>
                    isActive ? {color: 'blue'} : undefined
                }
            >
                <p>Projects</p>
            </NavLink>
            <NavLink 
                to="/contact"
                style={({ isActive }) =>
                    isActive ? {color: 'blue'} : undefined
                }
            >
                <p>Contact</p>
            </NavLink>
                <a href="https://docs.google.com/document/d/10grKBx14T3GHvVAu6VDG4uDzQ0fgW_iwlfo2OJMY1gY/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </nav>
    )
}

export default Navigation
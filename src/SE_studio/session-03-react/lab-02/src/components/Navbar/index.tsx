// imort component 
import React from "react"
import { Link } from 'react-router-dom'

// import css file 
import './style.css'

const NavBar : React.FC = () => {
    return (
        <ul className='nav'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact us</Link>
            </li>
        </ul>
    )
}

export default NavBar
import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./navbar.css"
import Logo from "../images/logo.png"
import {links} from "../data"
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
   <nav>
      <div className='container nav__container'>
         <Link to="/" className ="logo">
            <img src={Logo} alt = "Nav Logo" />
         </Link>
         <ul className = "nav__links">
            {
               links.map(({name, path}, index) => {
                  return (
                     <li>
                        <NavLink to = {path}>
                           {name}
                        </NavLink>
                     </li>
                  )
               })
            }
         </ul>
         <button className='nav__toggle-btn'>
            <HiMiniBars3 />
         </button>
      </div>
   </nav>
  )
}

export default Navbar

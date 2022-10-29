import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link>
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>

        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li to='/about'>
            <Link>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
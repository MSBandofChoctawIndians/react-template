import React from 'react'
import './Navbar.css'

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

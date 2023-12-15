import React, { useState } from 'react'
import Chevron from './assets/chevron.svg'
import PropTypes from 'prop-types'
import './Navbar.css'

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  links = [
    { id: 1, label: 'Link 1', url: '#' },
    { id: 2, label: 'Link 2', url: '#' },
    { id: 3, label: 'Link 3', url: '#' },
    { id: 4, label: 'Link 4', url: '#' },
    { id: 5, label: 'Link 5', url: '#' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-mobile">
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className="logo">
          <img src={Chevron} alt="logo" />
          React Template
        </div>
        <button>Button</button>
      </div>
      {isOpen && (
        <div className="nav-links-mobile">
          {links.map((link, id) => (
            <a href={link.url} key={id}>
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div className="nav-desktop">
        <div className="logo">
          <img src={Chevron} alt="logo" />
          React Template
        </div>
        <div className="nav-links-desktop">
          {links.map((link, id) => (
            <a href={link.url} key={id}>
              {link.label}
            </a>
          ))}
        </div>
        <button>Button</button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Navbar

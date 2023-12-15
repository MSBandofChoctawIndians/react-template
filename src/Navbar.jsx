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
        <button onClick={() => setIsOpen(!isOpen)} class="default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div className="logo">
          <img src={Chevron} alt="logo" />
          Office of <br />
          Public Information
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
          <button>Button</button>
        </div>
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

import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting (props) {
  return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}!</h2> : <h2 className="login-prompt">Please log in to continue</h2>)
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

export default UserGreeting

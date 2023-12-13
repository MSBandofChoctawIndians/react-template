import React from 'react'

function Button () {
  const styles = {
    backgroundColor: 'hsl(200, 100%, 28%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  }

  return (
    <button style={styles}>Click Me</button>
  )
}

export default Button

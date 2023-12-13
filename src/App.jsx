import React from 'react'
import Card from './Card'
import Button from './Button'
import Student from './Student'

function App () {
  return (
    <>
      <h1>React App</h1>
      <Card />
      <Button />
      <Student name='John' age={30} isStudent={true} />
    </>
  )
}

export default App

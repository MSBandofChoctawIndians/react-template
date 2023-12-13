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
      <Student name='Spongebob' age={30} isStudent={true} />
      <Student name='Patrick' age={42} isStudent={false} />
      <Student name='Squidward' age={50} isStudent={false} />
      <Student name='Sandy' age={27} isStudent={true} />
      <Student />
    </>
  )
}

export default App

import React from 'react'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'

function App() {
  const fruits = []

  const vegetables = [
    { id: 1, name: 'potatoes', calories: 110 },
    { id: 2, name: 'celery', calories: 15 },
    { id: 3, name: 'carrots', calories: 25 },
    { id: 4, name: 'corn', calories: 63 },
    { id: 5, name: 'broccoli', calories: 50 }
  ]

  return (
    <>
      <h1>React App</h1>
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  )
}

export default App

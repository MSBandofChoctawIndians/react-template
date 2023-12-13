import React from 'react'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import Carousel from './Carousel'

function App() {
  const images = [
    'https://images.unsplash.com/photo-1593642532453-9d9e9e3c5c1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHN0b3JlJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'https://images.unsplash.com/photo-1593642532453-9d9e9e3c5c1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHN0b3JlJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'https://images.unsplash.com/photo-1593642532453-9d9e9e3c5c1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHN0b3JlJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  ]
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 }
  ]

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
      <Carousel images={images} />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  )
}

export default App

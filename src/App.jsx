import React from 'react'
import Carousel from './Carousel'
import Card from './Card'
import Button from './Button'

function App() {
  const Student = React.lazy(() => import('./Student'))
  const List = React.lazy(() => import('./List'))
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Image 1 caption'
    },
    {
      src: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Image 2 caption'
    },
    {
      src: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Image 3 caption'
    },
    {
      src: 'https://images.unsplash.com/photo-1537346439163-eafb59bdc400?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Image 4 caption'
    }
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
      <Card />
      <Button />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Student name="Spongebob" age={30} isStudent={true} />
        <Student name="Patrick" age={42} isStudent={false} />
        <Student name="Squidward" age={50} isStudent={false} />
        <Student name="Sandy" age={27} isStudent={true} />
        <Student />
        <List items={fruits} category="Fruits" />
        <List items={vegetables} category="Vegetables" />
      </React.Suspense>
    </>
  )
}

export default App

import React, { useState } from 'react'

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(prevIndex)
  }
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(nextIndex)
  }

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="Background" />
      <button onClick={nextImage}>Next</button>
    </div>
  )
}

export default Carousel

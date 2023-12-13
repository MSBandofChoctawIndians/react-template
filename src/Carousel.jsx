import React, { useState } from 'react'
import './Carousel.css'

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
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevImage}>
        Previous
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt="Background"
      />
      <button className="carousel-button" onClick={nextImage}>
        Next
      </button>
    </div>
  )
}

export default Carousel

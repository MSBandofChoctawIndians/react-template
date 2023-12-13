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
      <div className="carousel-image-container">
        <img
          className="carousel-image"
          src={images[currentImageIndex]}
          alt="Background"
        />
      </div>
      <button className="carousel-button" onClick={nextImage}>
        Next
      </button>
      <CarouselDots numDots={images.length} activeDot={currentImageIndex} />
    </div>
  )
}

function CarouselDots({ numDots, activeDot }) {
  return (
    <div className="carousel-dots">
      {Array.from({ length: numDots }).map((_, i) => (
        <span
          key={i}
          className={`carousel-dot ${index === activeDot ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default Carousel

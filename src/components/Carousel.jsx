import React, { useState } from 'react'
import '../style/Carousel.css' // Import the CSS file

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === 0 ? images.length - 1 : oldIndex - 1
    })
  }

  const nextSlide = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === images.length - 1 ? 0 : oldIndex + 1
    })
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
          alt="carousel"
        />
      ))}
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

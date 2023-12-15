import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Carousel.css'

/**
 * A carousel component that displays a slideshow of images.
 *
 * @component
 * @param {Object[]} images - An array of image objects.
 * @param {string} images[].src - The source URL of the image.
 * @param {string} images[].caption - The caption for the image.
 * @returns {JSX.Element} The Carousel component.
 */
function Carousel({ images }) {
  // State variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Automatic image transition
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(newIndex)
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [currentImageIndex, images.length, isPaused])

  // Go to the previous image
  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(prevIndex)
  }

  // Go to the next image
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(nextIndex)
  }

  // Render the Carousel component
  return (
    <div className="carousel-container">
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevImage}
      >
        &#10094; {/* Unicode for left arrow */}
      </button>
      <div
        className="carousel-image-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${image.src})`
            }} /* Set the image as a background image */
          >
            {index === currentImageIndex && (
              <div className="carousel-caption">{image.caption}</div>
            )}
          </div>
        ))}
        <CarouselDots numDots={images.length} activeDot={currentImageIndex} />
      </div>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextImage}
      >
        &#10095; {/* Unicode for right arrow */}
      </button>
    </div>
  )
}

// Renders the carousel dots
function CarouselDots({ numDots, activeDot, setCurrentImageIndex }) {
  return Array.from({ length: numDots }).map((_, index) => (
    <div
      key={index}
      className={`carousel-dot ${index === activeDot ? 'active' : ''}`}
      onClick={() =>
        setCurrentImageIndex(index)
      } /* Add an onClick event to each dot */
    ></div>
  ))
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      caption: PropTypes.string
    })
  ).isRequired
}

export default Carousel

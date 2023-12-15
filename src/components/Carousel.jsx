/**
 * A carousel component that displays a slideshow of images.
 *
 * @component
 * @param {Object[]} images - An array of image objects.
 * @param {string} images[].src - The source URL of the image.
 * @returns {JSX.Element} - The carousel component.
 */
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
        <div
          key={index}
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={image.src} className="carousel-image" alt="carousel" />
          <p className="carousel-caption">{image.caption}</p>
        </div>
      ))}
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  )
}

export default Carousel

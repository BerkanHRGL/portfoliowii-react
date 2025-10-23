import { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, alt = 'Carousel image' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-arrow carousel-prev" onClick={prevImage}>
          ‹
        </button>
        <div className="carousel-image-container">
          <img
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button className="carousel-arrow carousel-next" onClick={nextImage}>
          ›
        </button>
      </div>
      <div className="carousel-counter">
        <span className="carousel-current">{currentIndex + 1}</span> /{' '}
        <span className="carousel-total">{images.length}</span>
      </div>
    </div>
  );
};

export default Carousel;

import { useRef, useState, useEffect } from 'react';
import './DragCarousel.css';

const DragCarousel = ({ images, alt = 'Carousel image' }) => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  // Handle mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiply for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle scroll event
  const handleScroll = () => {
    updateScrollProgress();
  };

  // Initialize scroll progress on mount
  useEffect(() => {
    updateScrollProgress();
  }, []);

  return (
    <div className="drag-carousel">
      <div
        className={`drag-carousel-container ${isDragging ? 'dragging' : ''}`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div key={index} className="drag-carousel-slide">
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="drag-carousel-image"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Progress slider */}
      <div className="drag-carousel-progress-container">
        <div
          className="drag-carousel-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default DragCarousel;

import React, { useState } from "react";

const Carousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={altText} className="carousel-image" />
      <button className="next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;

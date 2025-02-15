import React, { useState } from "react";

const Carousel = ({ media, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>

      {/* Render Image or Video */}
      {media[currentIndex].endsWith(".mov") || media[currentIndex].endsWith(".mp4") ? (
        <video className="carousel-video" controls>
          <source src={media[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={media[currentIndex]} alt={altText} className="carousel-image" />
      )}

      <button className="next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;

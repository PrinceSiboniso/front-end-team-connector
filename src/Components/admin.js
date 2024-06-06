import React from 'react';
import './ImageGrid.css';

import java2022 from './img/java2022.jpg';
import mobileAppDev from './images/mobileappdev.png';
// Import the rest of your image files here

const admin = () => {
  const images = [
    { src: java2022, alt: 'Java 2022' },
    { src: mobileAppDev, alt: 'Mobile App Dev' },
    // Add the rest of your image objects here
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img
          key={index}
          className="image-icon"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default admin;
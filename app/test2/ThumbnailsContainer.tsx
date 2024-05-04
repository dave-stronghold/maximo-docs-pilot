import React from 'react';
import Thumbnail from './Thumbnail';
import styles from './ThumbnailsContainer.module.scss'; // Import the CSS module

const ThumbnailsContainer = ({ images, activeIndex, setActiveIndex }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        
        <div
          key={index}
          className={`${styles.thumbnail} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <div  className={`${styles.backdrop} ${activeIndex === index ? styles.bd_active : ''}`}></div>
          <Thumbnail src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailsContainer;

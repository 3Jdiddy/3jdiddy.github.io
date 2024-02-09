import React from 'react';
import styles from './aboutPic.module.css';

const AboutPic = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="about.jpg"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default AboutPic;

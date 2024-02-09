import React from 'react';
import styles from './homePic.module.css';

const HomePic = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="newcover.png"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default HomePic;

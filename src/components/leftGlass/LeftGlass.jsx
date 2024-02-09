import React from 'react';
import styles from './leftGlass.module.css';

const LeftGlass = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="glass1.png"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default LeftGlass;

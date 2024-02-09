import React from 'react';
import styles from './rightGlass.module.css';

const RightGlass = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="glass2.png"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default RightGlass;

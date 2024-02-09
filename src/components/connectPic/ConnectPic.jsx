import React from 'react';
import styles from './connectPic.module.css';

const ConnectPic = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="connect.jpg"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default ConnectPic;

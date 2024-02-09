import React from 'react';
import styles from './communityPic.module.css';

const CommunityPic = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src="community.jpg"
        alt=""
        className={styles.image}
      />
    </div>
  );
};

export default CommunityPic;

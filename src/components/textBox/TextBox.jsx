import React from 'react';
import PropTypes from 'prop-types';
import styles from './textBox.module.css';

const TextBox = ({ title, description, width, height, link }) => {
  const textBoxStyle = {
    width: width || 'auto',    // Default to 'auto' if not provided
    height: height || 'auto',  // Default to 'auto' if not provided
  };

  return (
    <div className={styles.textBox} style={textBoxStyle}>
      <a href={link} className={styles.titleLink}>
        <h2 className={styles.title}>{title}</h2>
      </a>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

TextBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  link: PropTypes.string,  // Add link as a prop for the page URL
};

export default TextBox;

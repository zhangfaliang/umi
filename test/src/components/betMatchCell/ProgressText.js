import React from 'react';
import styles from './index.less';
const ProgressText = ({
  handleClick = () => {},
  stringInTime = '1h30',
  text = 'String in',
  disabled = false,
}) => {
  const handleClickProgress = event => {
    event.preventDefault();
    !disabled && handleClick && handleClick();
  };
  return (
    <div className={styles.progress} onClick={handleClickProgress}>
      <span className={styles.text}>{text}</span>
      <span className={styles.stringInTime}>{stringInTime}</span>
    </div>
  );
};

ProgressText.COMPONENT_NAME = 'PROGRESSTEXT';
export default ProgressText;

import React from 'react';
import classnames from 'classnames';
import styles from './HeaderItem.less';
import CLOSE_ACTIVE from '../../assets/close-active.png';

export const HeaderItem = ({
  handleClick,
  logo,
  text,
  showCloseIcon = false,
  isActive = false,
}) => {
  const wrapperClass = isActive
    ? styles['item']
    : classnames(styles['item'], styles['item-inactive']);

  return (
    <div className={wrapperClass} onClick={handleClick}>
      <img src={logo} alt="logo" />
      <div>{text}</div>
      {showCloseIcon && <img src={CLOSE_ACTIVE} alt="close" />}
    </div>
  );
};

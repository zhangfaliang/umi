import React, { Component } from 'react';
import IconFont from '../iconFont';
import styles from './index.less';

const LiveNum = ({
  number = 5,
  prefixCls = 'default',
  handleLive = () => {
    console.log('handuleLiveNum');
  },
}) => {
  const clsNameStr = `${prefixCls || 'default'}-live-num`;
  const handleLiveNum = e => {
    e.preventDefault();
    handleLive && handleLive();
  };
  return (
    <div onClick={handleLiveNum} className={styles[clsNameStr]}>
      <span className={styles.liveImg} />
      <span className={styles.num}>{number}</span>
      <span className={styles.icon}>
        <IconFont type="mycopy" />
      </span>
    </div>
  );
};
LiveNum.COMPONENT_NAME = 'LIVENUM';
export default LiveNum;

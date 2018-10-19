import React from 'react';
import styles from './index.less';
import LOADING_IMG from '../../assets/loading.gif';

export const Loading = () => (
  <div className={styles['loading-wrapper']}>
    <img src={LOADING_IMG} alt="loading" />
  </div>
);

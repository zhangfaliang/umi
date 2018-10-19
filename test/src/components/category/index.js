import React from 'react';
import styles from './index.less';

export function Category({ dataSets = [] }) {
  if (!Array.isArray(dataSets)) {
    throw new TypeError('dataSets should be a Array');
  }

  return (
    <div className={styles['container-wrapper']}>
      <div className={styles['container']}>
        {dataSets.map(({ logo, count, text }, index) => (
          <div className={styles['box']} key={`${text}-${index}`}>
            <div className={styles['count']}>{count}</div>
            <img src={logo} alt="" />
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

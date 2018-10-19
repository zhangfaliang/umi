import React, { Component } from 'react';
import { Header } from './Header';
import styles from './Popup.less';
import { GAME_CATEGORY_BY_DATE } from '../../fakeData/gameCategory';

export class SwitchTabPopup extends Component {
  render() {
    return (
      <div className={styles['popup-wrapper']}>
        <Header isWithPopup />
        <div className={styles['content-wrapper']}>
          {GAME_CATEGORY_BY_DATE.map((item, index) => (
            <Row key={index} props={item} />
          ))}
        </div>
      </div>
    );
  }
}

const Row = ({ props }) => (
  <div className={styles['row']}>
    <div>{props.date}</div>
    <div>{props.count}</div>
  </div>
);

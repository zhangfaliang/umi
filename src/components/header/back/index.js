import React, { Component } from 'react';
import styles from './index.less';

class Back extends Component {
  static defaultProps = {
    title: 'Title',
    backIcon: require('../../../assets/v1/back@3x.png'),
    onBack: () => {
      window.history.go(-1);
    },
  };
  render() {
    const { onBack, title, backIcon } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.main}>
          <div onClick={onBack} className={styles.back}>
            <img src={backIcon} alt="" />
          </div>
          <div className={styles.content}>{title}</div>
          <div className={styles.right}>
            <img src={require('../../../assets/v1/back@3x.png')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Back;

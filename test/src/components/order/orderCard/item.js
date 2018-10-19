import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './index.less';

class Item extends Component {
  static defaultProps = {
    noPadding: false,
    children: <div>Node</div>,
    size: 'large',
  };

  render() {
    const { noPadding, extra, children, size } = this.props;
    const itemCls = classnames({
      [styles.item]: true,
      [styles.noPadding]: noPadding,
      [styles.small]: size === 'small',
      [styles.large]: size === 'large',
    });
    return (
      <div className={itemCls}>
        {extra && <div className={styles.item_L}>{extra}</div>}
        <div className={styles.item_R}>{children}</div>
      </div>
    );
  }
}

export default Item;

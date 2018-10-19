import React, { Component } from 'react';
import classnames from 'classnames';
import IconFont from '../iconFont';
import styles from './index.less';
class Panel extends Component {
  static COMPONENT_NAME = 'PANEL';
  constructor(props) {
    super(props);
    this.state = {
      showPanel: props.accordion ? props.activeKeyId === props.keyId : '',
    };
  }
  shouldComponentUpdate(nextPrps) {
    if (nextPrps.accordion && nextPrps.activeKeyId !== this.props.activeKeyId) {
      this.setState({
        showPanel: nextPrps.activeKeyId === nextPrps.keyId,
      });
    }
    return true;
  }
  handlePanel = () => {
    const { handlePanel, keyId } = this.props;
    this.setState(
      {
        showPanel: !this.state.showPanel,
      },
      () => {
        handlePanel && handlePanel(this.state.showPanel ? keyId : '');
      }
    );
  };
  render() {
    const { children, titleText, keyId, prefixCls } = this.props;
    const { showPanel } = this.state;
    const clsName = classnames({
      [styles[`${prefixCls}-panel`]]: true,
      [styles.show]: showPanel,
    });

    return (
      <div className={clsName}>
        <div className={styles.title} onClick={this.handlePanel}>
          <span className={styles.text}>{titleText}</span>
          <span className={styles.iconFont}>
            <IconFont type="mycopy2" />
          </span>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    );
  }
}
Panel.defaultProps = {
  prefixCls: 'default',
  keyId: 'basket',
  activeKeyId: 'basket',
  accordion: false,
  titleText: 'Primera división de Liga',
  handlePanel: keyId => {
    console.log(keyId);
  },
};
export default Panel;

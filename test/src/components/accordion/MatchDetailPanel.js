import React, { Component } from 'react';
import classnames from 'classnames';
import IconFont from '../iconFont';
import styles from './index.less';
class MatchDetailPanel extends Component {
  static COMPONENT_NAME = 'MATCHDETAILPANEL';
  constructor(props) {
    super(props);
    this.state = {
      showPanel: props.accordion ? props.activeKeyId === props.keyId : '',
      isStick: props.activeStickKeyId === props.keyId,
    };
  }
  shouldComponentUpdate(nextPrps) {
    if (nextPrps.accordion && nextPrps.activeKeyId !== this.props.activeKeyId) {
      this.setState({
        showPanel: nextPrps.activeKeyId === nextPrps.keyId,
      });
    }
    if (nextPrps.activeStickKeyId !== this.props.activeStickKeyId) {
      this.setState({
        isStick: nextPrps.activeStickKeyId === nextPrps.keyId,
      });
    }
    return true;
  }

  handlePanel = e => {
    e.stopPropagation();
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

  handleStickIcon = e => {
    e.stopPropagation();
    const { handleStickIcon, keyId } = this.props;
    this.setState(
      {
        isStick: true,
      },
      () => {
        handleStickIcon && handleStickIcon(keyId);
      }
    );
    return false;
  };
  handleHelpIcon = e => {
    e.stopPropagation();
    const { handleHelpIcon, keyId } = this.props;
    handleHelpIcon && handleHelpIcon(keyId);
  };
  render() {
    const { children, leftText, keyId, prefixCls } = this.props;
    const { showPanel, isStick } = this.state;
    const clsName = classnames({
      [styles[`${prefixCls}-detail-panel`]]: true,
      [styles.show]: showPanel,
    });
    const stickCls = classnames({
      [styles.stickIcon]: true,
      [styles.activeStickIcon]: isStick,
    });
    const foldCls = classnames({
      [styles.foldIcon]: true,
      [styles.activeFoldIcon]: showPanel,
    });
    return (
      <div className={clsName}>
        <div className={styles.title} onClick={this.handlePanel}>
          <div className={styles.titleLife}>
            <span className={styles.leftIcon} onClick={this.handleHelpIcon}>
              <IconFont type="bangzhushuoming" />
            </span>
            <span className={styles.leftText}>{leftText}</span>
          </div>

          <div className={styles.titleRight}>
            <span className={stickCls} onClick={this.handleStickIcon}>
              <IconFont type="zhiding" />
            </span>

            <span onClick={this.handlePanel} className={foldCls}>
              {' '}
              <IconFont type="mycopy" />
            </span>
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    );
  }
}
MatchDetailPanel.defaultProps = {
  prefixCls: 'default',
  keyId: 'basket',
  activeKeyId: 'basket',
  accordion: false,
  leftText: 'Primera división de Liga',
  handlePanel: keyId => {
    console.log(keyId + 'handlePanel');
  },
  handleStickIcon: keyId => {
    console.log(keyId + 'handleStickIcon');
  },
  handleHelpIcon: keyId => {
    console.log(keyId + 'handleHelpIcon');
  },
};
export default MatchDetailPanel;

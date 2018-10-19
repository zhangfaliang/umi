import React, { Component } from 'react';
import classnames from 'classnames';
import IconFont from '../iconFont';
import styles from './index.less';
class BetButton extends Component {
  static COMPONENT_NAME = 'BETBUTTON';
  constructor(props) {
    super(props);
    this.upNode = React.createRef();
    this.downNode = React.createRef();
    this.state = {
      activeFlag: props.defaultActive,
    };
  }

  delay = (callBack, timeout) => {
    setTimeout(callBack, timeout);
  };

  flickerSp = ({ node, newClassName }) => {
    node.className = newClassName;
  };

  componentDidUpdate = (prevProp, prevState) => {
    const { changeSp, changeHandicap, optionId, sp, handicap, optionName } = this.props;
    const { up, down, flickerSp } = styles;

    this.downNode.current.className = up;
    this.upNode.current.className = down;
    if (prevProp.sp !== this.props.sp) changeSp({ optionId, sp, handicap, optionName });
    if (prevProp.handicap !== this.props.handicap)
      changeHandicap({ optionId, sp, handicap, optionName });
    if (this.props.sp > prevProp.sp) {
      this.flickerSp({
        node: this.upNode.current,
        newClassName: `${up} ${flickerSp}`,
      });
    } else if (this.props.sp < prevProp.sp) {
      // 下降
      this.flickerSp({
        node: this.downNode.current,
        newClassName: `${down} ${flickerSp}`,
      });
    }
  };

  handleBetBtn = event => {
    event.preventDefault();
    const target = event.target;
    const { clickBetBtn, handicap, sp, optionId, disabled, optionName } = this.props;
    !disabled &&
      this.setState({ activeFlag: !this.state.activeFlag }, () => {
        this.state.activeFlag &&
          clickBetBtn({ optionId, sp, handicap, optionName, target: target });
      });
  };

  render() {
    const { sp, prefixCls, disabled, optionName } = this.props;
    const betBtnClsStr = `${prefixCls || 'default'}-bet-button`;
    const betBtnCls = classnames({
      [styles[betBtnClsStr]]: true,
      [styles['disabled']]: disabled,
      [styles['active']]: this.state.activeFlag,
    });

    return (
      <div className={betBtnCls} onClick={this.handleBetBtn}>
        <span ref={this.upNode} className={styles.up}>
          <IconFont type="sheng" />
        </span>
        <span ref={this.downNode} className={styles.down}>
          <IconFont type="jiang" />
        </span>
        {optionName && (
          <div className={styles.wrapOptionName}>
            <span className={styles.optionName}>{optionName}</span>
          </div>
        )}
        <div className={styles.wrapSp}>
          {disabled ? (
            <span className={styles.lock}>
              {' '}
              <IconFont type="lock" />
            </span>
          ) : (
            <span className={styles.sp}>{sp}</span>
          )}
        </div>
      </div>
    );
  }
}
BetButton.defaultProps = {
  prefixCls: 'default', // css 前缀  目前 default detail medium small large
  disabled: false,
  optionId: 'w',
  defaultActive: false,
  handicap: '4.5',
  sp: 1.2,
  optionName: '4.5',
  clickBetBtn: params => {
    console.log(params);
  },
  changeSp: () => {
    console.log('changeSp');
  },
  changeHandicap: () => {
    console.log('changeHandicap');
  },
  timeout: 1000,
  stopTime: 5000,
};
export default BetButton;

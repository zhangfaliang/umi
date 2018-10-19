import React, { Component } from 'react';
import styles from './index.less';
import BetMatchInfo from '../betMatchInfo';
import BetButtonCell from '../betButtonCell';
import ProgressText from './ProgressText';
import { Label } from '../label';
import { spawn } from 'redux-saga/effects';
class BetMatchCell extends Component {
  static COMPONENT_NAME = 'BETMATCHCELL';
  render() {
    const { children, prefixCls } = this.props;
    const classNameStr = `${prefixCls || 'push-inplay'}-bet-cell`;
    const childrens = React.Children.map(children, option => {
      const { clickBetBtn, changeSp, changeHandicap, ...other } = option.props;

      if (option.type.COMPONENT_NAME === 'BETMATCHINFO') {
        return <BetMatchInfo {...other} />;
      } else if (option.type.COMPONENT_NAME === 'BETBUTTONCELL') {
        return (
          <BetButtonCell
            {...other}
            clickBetBtn={this.props.clickBetBtn}
            changeSp={this.props.changeSp}
            changeHandicap={this.props.changeHandicap}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'PROGRESSTEXT') {
        return <ProgressText {...other} handleClick={this.props.betNow} />;
      }
    });
    return <div className={styles[classNameStr]}>{childrens}</div>;
  }
}
BetMatchCell.defaultProps = {
  betNow: () => {
    console.log('betNow');
  },
  clickBetBtn: params => {
    console.log(params);
  },
  changeSp: () => {
    console.log('changeSp');
  },
  changeHandicap: () => {
    console.log('changeHandicap');
  },
};

export default BetMatchCell;

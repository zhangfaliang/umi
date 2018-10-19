import React, { Component } from 'react';
import BetButton from '../betButton';
import Line from '../line';
import styles from './index.less';
class BetButtonCell extends Component {
  static COMPONENT_NAME = 'BETBUTTONCELL';
  clickBetBtn = betInfo => {
    const { playId, clickBetBtn } = this.props;
    clickBetBtn({ ...betInfo, playId });
  };
  changeSp = betInfo => {
    const { playId, changeSp } = this.props;
    changeSp({ ...betInfo, playId });
  };
  changeHandicap = betInfo => {
    const { playId, changeHandicap } = this.props;
    changeHandicap({ ...betInfo, playId });
  };
  render() {
    const { children, prefixCls } = this.props;
    const classNameStr = `${prefixCls || 'push-inplay'}-betButtonCell`;
    const childrens = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'BETBUTTON') {
        return (
          <BetButton
            {...other}
            clickBetBtn={this.clickBetBtn}
            changeSp={this.props.changeSp}
            changeHandicap={this.props.changeHandicap}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'LINE') {
        return <Line {...other} />;
      }
      return null;
    });
    return <div className={styles[classNameStr]}>{childrens}</div>;
  }
}
BetButtonCell.defaultProps = {
  playId: 'spf',
  clickBetBtn: betInfo => {
    //console.log(betInfo);
  },
  changeSp: betInfo => {
    //console.log('changeSp',betInfo);
  },
  changeHandicap: betInfo => {
    // console.log('changeHandicap',betInfo);
  },
};
export default BetButtonCell;

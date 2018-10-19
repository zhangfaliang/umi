import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './index.less';
const baseketball = require('../../assets/game/index/basketball.png');
const baseketballActive = require('../../assets/game/index/basketballActive.png');
const soccer = require('../../assets/game/index/Soccer.png');
const soccerActive = require('../../assets/game/index/SoccerActive.png');

class GameTypeTitle extends Component {
  static COMPONENT_NAME = 'GAMETYPETITLE';
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultActiveKey,
    };
  }

  handleGameType = key => {
    const { activeKey } = this.state;
    const { handleGameType } = this.props;
    if (activeKey !== key) {
      this.setState(
        {
          activeKey: key,
        },
        () => {
          handleGameType && handleGameType(key);
        }
      );
    }
  };
  render() {
    const { gamaTypeArr, prefixCls } = this.props;
    const { activeKey } = this.state;
    const clsName = styles[`${prefixCls}-game-type-title`];

    return (
      <div className={clsName}>
        {gamaTypeArr &&
          gamaTypeArr.map(item => {
            const { imgUrl, gameTypeText, key, activeImgUrl } = item;
            const gameTypeTextCls = classnames({
              [styles['typeText']]: true,
              [styles['activeTypeText']]: key === activeKey,
            });
            return (
              <div
                key={key}
                className={styles.items}
                onClick={() => {
                  this.handleGameType(key);
                }}
              >
                <img
                  className={styles.img}
                  src={key === activeKey ? activeImgUrl : imgUrl}
                  alt={key}
                />
                <span className={gameTypeTextCls}>{gameTypeText}</span>
              </div>
            );
          })}
      </div>
    );
  }
}
GameTypeTitle.defaultProps = {
  prefixCls: 'default',
  defaultActiveKey: 'Soccer',
  gamaTypeArr: [
    {
      imgUrl: soccer,
      activeImgUrl: soccerActive,
      gameTypeText: 'Soccer (22)',
      key: 'Soccer',
    },
    {
      imgUrl: baseketball,
      activeImgUrl: baseketballActive,
      gameTypeText: 'Basketball (22)',
      key: 'Basketball',
    },
  ],
  handleGameType: key => {
    console.log(key + 'handleGameType');
  },
};
export default GameTypeTitle;

import React, { Component } from 'react';
import classnames from 'classnames';
import IconFont from '../iconFont';
import styles from './index.less';
class BetInfo extends Component {
  static COMPONENT_NAME = 'BETINFO';
  constructor(props) {
    super(props);
    this.state = {
      isChangeSp: props.defaultChangeSp,
      isChageHandcap: props.defaultChangeHandcap,
    };
  }

  shouldComponentUpdate(nexsProps) {
    const { optionId, playId, sp, optionName, matchId, handcap } = this.props;
    if (
      (nexsProps.optionId === optionId && nexsProps.playId === playId,
      nexsProps.matchId !== matchId)
    ) {
      if (nexsProps.sp !== sp) {
        this.setState({
          isChangeSp: true,
        });
      }
      if (nexsProps.handcap !== handcap) {
        this.setState({
          isChageHandcap: true,
        });
      }
    }
    return true;
  }

  render() {
    const {
      prefixCls,
      optionName,
      gamePlay,
      gameAgainst,
      handleDelete,
      defaultChangeHandcap,
      defaultChangeSp,
      sp,
    } = this.props;
    const clsName = styles[`${prefixCls}-betinfor`];
    const { isChangeSp, isChageHandcap } = this.state;

    const spCls = classnames({
      [styles.sp]: true,
      [styles.changeSp]: isChangeSp,
    });
    const optionNameCls = classnames({
      [styles.changeHandcap]: isChageHandcap,
    });
    return (
      <div
        className={clsName}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={styles.left}>
          <div className={styles.optionName}>
            <span className={optionNameCls}>{optionName}</span>
            <span className={spCls}>{sp}</span>
          </div>
          <div className={styles.gamePlayName}>{gamePlay}</div>
          <div className={styles.gameAgainst}>{gameAgainst}</div>
        </div>
        <div className={styles.right} onClick={handleDelete}>
          <IconFont type="delete" />
        </div>
      </div>
    );
  }
}
BetInfo.defaultProps = {
  defaultChangeSp: '',
  defaultChangeHandcap: '',
  prefixCls: 'default',
  optionName: 'Royal Pari FC',
  handcap: '-2',
  sp: 2.7,
  optionId: 's',
  playId: 'spf',
  matchId: '',
  gamePlay: 'Result 1X2',
  gameAgainst: 'Royal Pari FC  VS  Nacional Potosi',

  handleDelete: () => {
    console.log('handleDelete');
  },
};
export default BetInfo;

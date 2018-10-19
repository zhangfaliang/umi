import React from 'react';
import styles from './index.less';

const GameTypeList = ({
  footerTest = '*more markets are available in game page',
  listArr = [
    'Match Result',
    'Total Goals Asian',
    'Handicap',
    'Asian Handicap',
    'Double Chance',
    'Both Team to score',
  ],
  prefixCls = 'default',
  handleItem = item => {
    console.log(item);
  },
}) => {
  const clsName = `${prefixCls || 'default'}-game-type-list`;
  return (
    <div className={styles[clsName]}>
      {listArr.map(item => {
        return (
          <span
            key={item}
            onClick={() => {
              handleItem(item);
            }}
            className={styles.item}
          >
            {item}
          </span>
        );
      })}
      <div className={styles.footer}>{footerTest}</div>
    </div>
  );
};
GameTypeList.COMPONENT_NAME = 'GAMETYPELIST';
export default GameTypeList;

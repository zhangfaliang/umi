import React from 'react';
import styles from './index.less';
const BetMatchInfo = ({
  homeName = 'Villacher Sv',
  awayName = 'Greifenburg',
  homeScore = 12,
  awayScore = 14,
  isLive = true,
  time = `4th set 10'`,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.nameOrScore}>
        <span className={styles.name}>{homeName}</span>
        {homeScore && <span className={styles.score}>{homeScore} </span>}
      </div>
      <div className={styles.nameOrScore}>
        <span className={styles.name}>{awayName}</span>
        {awayScore && <span className={styles.score}>{awayScore}</span>}
      </div>
      <div className={styles.bottom}>
        {isLive && <span className={styles.live}>LIVE</span>}
        {time && <span className={styles.time}>{time}</span>}
      </div>
    </div>
  );
};
BetMatchInfo.COMPONENT_NAME = 'BETMATCHINFO';
export default BetMatchInfo;

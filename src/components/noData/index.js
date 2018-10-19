import React from 'react';
import styles from './index.less';

export const NoData = ({ logo, texts = [] }) => (
  <div className={styles['no-data-wrapper']}>
    <img src={logo} alt="no-data-order-list" />
    {texts.map((value, index) => (
      <div key={`${value}-${index}`}>{value}</div>
    ))}
  </div>
);

// HOW TO USE
// WARNING: 使用的时候注意样式是否会受到Header的影响，可能需要额外设置 padding-top: 88px 来处理

// storiesOf('NoData', module).add('订单列表为空', () => (
//   <NoData
//     logo={NO_DATA_ORDER_LIST}
//     texts={['No orders are available to meet your conditions.']}
//   />
// ))

// storiesOf('NoData', module).add('收藏夹为空', () => (
//   <NoData
//     logo={NO_DATA_FAVORITE}
//     texts={[
//       'You have no favourite games.',
//       'You can make games favourite by clicking a star',
//       'in a game page.',
//     ]}
//   />
// ))

// storiesOf('NoData', module).add('比赛列表为空', () => (
//   <NoData
//     logo={NO_DATA_GAME_LIST}
//     texts={['No orders are available to meet your conditions.']}
//   />
// ))

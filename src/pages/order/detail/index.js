import React, { Component } from 'react';
import { connect } from 'dva';
import { OrderCard } from '@/components/order';
import styles from './index.less';

const Item = OrderCard.Item;

const mapDispatchToProps = dispatch => {
  return {
    onSubSetPageTitle: payload =>
      dispatch({
        type: 'global/setPageTitle',
        payload,
      }),
  };
};

@connect(
  null,
  mapDispatchToProps
)
class Detail extends Component {
  componentDidMount() {
    this.props.onSubSetPageTitle('Orders Details');
  }
  render() {
    return (
      <div className={styles.wrap}>
        <OrderCard label="Order information">
          <Item extra={'match'}>Royal Pari FC VS Nacional Potosi</Item>
          <Item extra={'Match Result'}>Market</Item>
        </OrderCard>
        <OrderCard label="Payment">
          <Item extra={'Order No.'}>18402345675565678</Item>
        </OrderCard>
      </div>
    );
  }
}

export default Detail;

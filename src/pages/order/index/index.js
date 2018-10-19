import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { OrderFilter, OrderCard, OrderLabelCard } from '@/components/order';

import styles from './index.less';

const Panel = OrderFilter.Panel;
const Card = OrderLabelCard.Card;
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
class Order extends Component {
  componentDidMount() {
    this.props.onSubSetPageTitle('My Orders');
  }
  render() {
    return (
      <>
        <div className={styles.orderNav}>
          <OrderFilter
            onChange={v => {
              console.log(v);
            }}
            defaultActiveKey={['1', '2']}
          >
            <Panel
              body={[{ name: 'Last 24 Hrs' }, { name: 'Last 48 Hrs' }, { name: 'Last 6 Mths' }]}
            />
            <Panel body={[{ name: 'All' }, { name: 'Settled' }, { name: 'Unsettled' }]} />
          </OrderFilter>
        </div>
        <div className={styles.wrap}>
          <div className={styles.body}>
            <OrderLabelCard label={'Royal Pari FC 2.8'}>
              <Card>
                <Item extra={122} size="small">
                  order:222
                </Item>
                <Item extra={122} size="small">
                  order:222
                </Item>
                <Item size="small">order:222</Item>
              </Card>
              <Card>
                <Item extra={122} size="small">
                  order:222
                </Item>
              </Card>
            </OrderLabelCard>
          </div>
        </div>
      </>
    );
  }
}

export default Order;

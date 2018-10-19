import React, { Component } from 'react';
import { BackHeader } from '@/components/header';
import { connect } from 'dva';
import { createStructuredSelector } from 'reselect';
import Footer from '@/components/footer';

import { makePageTitle } from '../../selector';

import styles from './index.less';

const mapStateToProps = createStructuredSelector({
  pageTitle: makePageTitle,
});

const mapDispatchToProps = dispatch => {
  return {};
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class BackLayout extends Component {
  getContext() {
    const { onSubSetPageTitle } = this.props;
    return {
      onSubSetPageTitle,
    };
  }

  render() {
    const { pageTitle } = this.props;
    return (
      <div className={styles.wrap}>
        <BackHeader title={pageTitle} />
        <div className={styles.content}>
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default BackLayout;

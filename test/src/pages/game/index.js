import React, { Component } from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import { connect } from 'dva';
import { createStructuredSelector } from 'reselect';

import styles from './index.less';
import { makeSelectGameDataSource } from './selector';

const mapStateToProps = createStructuredSelector({
  dataSource: makeSelectGameDataSource(),
});

const mapDispatchToProps = dispatch => {
  return {};
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Home extends Component {
  changLang = () => {
    const locale = getLocale();
    if (!locale || locale === 'zh-CN') {
      setLocale('en-US');
    } else {
      setLocale('zh-CN');
    }
  };
  render() {
    const { dataSource } = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        {dataSource.title}
        <div onClick={this.changLang}>
          国际化切换：
          {formatMessage({ id: 'lang' })}
        </div>
      </div>
    );
  }
}

export default Home;

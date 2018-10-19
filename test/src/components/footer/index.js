import React, { Component } from 'react';
import Link from 'umi/link';
import BackTop from '../backTop';
import styles from './index.less';

class Footer extends Component {
  state = {
    title: 'bet8win',
    links: [
      {
        name: 'Contact Us',
        path: '/order/index',
      },
      {
        name: 'Contact Us',
        path: '/order/index',
      },
      {
        name: 'Contact Us',
        path: '/order/index',
      },
      {
        name: 'Contact Us',
        path: '/order/index',
      },
      {
        name: 'Contact Us',
        path: '/order/index',
      },
      {
        name: 'Contact Us',
        path: '/order/index',
      },
    ],
  };
  render() {
    const { title, links } = this.state;
    return (
      <footer className={styles.wrap}>
        <div>{title}</div>
        <div className={styles.links}>
          {links.map((v, k) => {
            return (
              <Link key={k} to={v.path}>
                {v.name}
              </Link>
            );
          })}
        </div>
        <BackTop />
      </footer>
    );
  }
}

export default Footer;

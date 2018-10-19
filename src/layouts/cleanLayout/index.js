import React, { Component } from 'react';
import { GameHeader } from '@/components/header';
import { OverlayList } from '@/components/overlay';
import Footer from '@/components/footer';
import styles from './index.less';

class CleanLayout extends Component {
  state = {
    leftVisible: false,
    rightVisible: false,
  };
  render() {
    // const { isLogin } = this.props;
    const { leftVisible, rightVisible } = this.state;
    const isLogin = true;
    return (
      <div className={styles.wrap}>
        <GameHeader
          onCloseOverlay={() => {
            this.setState({
              leftVisible: false,
              rightVisible: false,
            });
          }}
          isLogin={isLogin}
          leftContent={{
            icon: {
              value: require('../../assets/v1/menu@3x.png'),
              overlay: (
                <OverlayList
                  itemHandle={v => {
                    if (v.path) {
                      this.props.history.push(v.path);
                    } else {
                      console.log(v);
                    }
                  }}
                  dataSource={[
                    {
                      name: 'My-Order',
                      icon: '11',
                      count: 32,
                      path: '/order',
                    },
                    {
                      name: 'IN-Play',
                      icon: '11',
                      count: 32,
                    },
                    {
                      name: 'Soccer',
                      icon: '11',
                      count: 182,
                    },
                    {
                      name: 'Basketball',
                      icon: '11',
                      count: 68,
                    },
                    {
                      name: 'E-sport',
                      icon: '11',
                      count: 21,
                    },
                    {
                      name: 'Football',
                      icon: '11',
                      count: 19,
                    },
                    {
                      name: 'Baseball',
                      icon: '11',
                      count: 32,
                    },
                    {
                      name: 'Horse Racing',
                      icon: '11',
                      count: 8,
                    },
                    {
                      name: 'Sport Events',
                      icon: '11',
                      count: 12,
                    },
                  ]}
                />
              ),
              handle: () => {
                if (this.state.rightVisible) {
                  this.setState({ rightVisible: false });
                  setTimeout(() => {
                    this.setState({ leftVisible: !this.state.leftVisible });
                  }, 500);
                } else {
                  this.setState({ leftVisible: !this.state.leftVisible });
                }
              },
              visible: leftVisible,
            },
            menu: {
              value: 'Sports',
              handle: () => {
                console.log('Sports');
              },
            },
          }}
          rightContent={{
            icon: {
              value: isLogin ? require('../../assets/v1/my@3x.png') : 'Login',
              overlay: <div>login嘻嘻嘻</div>,
              handle: () => {
                if (isLogin) {
                  if (this.state.leftVisible) {
                    this.setState({ leftVisible: false });
                    setTimeout(() => {
                      this.setState({ rightVisible: !this.state.rightVisible });
                    }, 500);
                  } else {
                    this.setState({ rightVisible: !this.state.rightVisible });
                  }
                } else {
                  alert('没有登录');
                }
              },
              visible: rightVisible,
            },
            menu: {
              value: 'In-Play',
              handle: () => {
                console.log('In-Play');
              },
            },
          }}
        />
        <div className={styles.content}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default CleanLayout;

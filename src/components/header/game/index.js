import React, { Component } from 'react';

import classnames from 'classnames';
import { Transition } from 'react-transition-group';
import styles from './index.less';

class Game extends Component {
  state = {
    currentTap: null,
    visible: true,
  };

  static defaultProps = {
    isLogin: false,
    leftContent: {
      icon: {
        value: '',
        handle: () => {},
        overlay: null,
        visible: false,
      },
      menu: {
        value: 'Sports',
        handle: () => {},
      },
    },
    rightContent: {
      icon: {
        value: 'Login',
        handle: () => {},
        overlay: null,
        visible: false,
      },
      menu: {
        value: 'In-Play',
        handle: () => {},
      },
    },
    logo: '8win',
    onCloseOverlay: () => {},
  };

  onChangeCurrentTap = currentTap => {
    this.setState({ currentTap });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { leftContent, rightContent } = this.props;
    const nextVisible = leftContent.icon.visible || rightContent.icon.visible;
    if (nextVisible) {
      return 'hidden';
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === 'hidden') {
      document.body.style.overflow = snapshot;
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { isLogin } = this.props;
    const { currentTap } = this.state;
    const leftItemCls = classnames({
      [styles.item]: true,
      [styles.leftItem]: true,
      [styles.active]: currentTap === 'left',
    });

    const rightItemCls = classnames({
      [styles.item]: true,
      [styles.rightItem]: true,
      [styles.noLogin]: !isLogin,
      [styles.active]: currentTap === 'right',
    });

    const menuCls = classnames({
      [styles.menu]: true,
    });
    const { leftContent, rightContent, onCloseOverlay } = this.props;

    const overlays = [
      { overlay: leftContent.icon.overlay, visible: leftContent.icon.visible },
      { overlay: rightContent.icon.overlay, visible: rightContent.icon.visible },
    ];

    return (
      <div className={styles.wrap}>
        <div className={styles.main}>
          <div className={leftItemCls}>
            <div
              onClick={() => {
                this.props.leftContent.icon.handle();
                this.setState({ visible: true });
              }}
              className={styles.icon}
            >
              <img src={this.props.leftContent.icon.value} alt="" />
            </div>
            <div className={menuCls}>
              <span
                onClick={() => {
                  this.onChangeCurrentTap('left');
                  this.props.leftContent.menu.handle();
                }}
              >
                {this.props.leftContent.menu.value}
              </span>
            </div>
          </div>
          <div className={styles.banner}>{this.props.logo}</div>
          <div className={rightItemCls}>
            <div className={menuCls}>
              <span
                onClick={() => {
                  this.onChangeCurrentTap('right');
                  this.props.rightContent.menu.handle();
                }}
              >
                {this.props.rightContent.menu.value}
              </span>
            </div>
            <div
              onClick={() => {
                this.props.rightContent.icon.handle();
                this.setState({ visible: true });
              }}
              className={styles.icon}
            >
              {isLogin ? (
                <img src={this.props.rightContent.icon.value} alt="" />
              ) : (
                this.props.rightContent.icon.value
              )}
            </div>
          </div>
        </div>
        {overlays.map((v, k) => {
          return (
            <Transition key={k} in={v.visible} timeout={500}>
              {state => {
                return (
                  <div
                    onClick={() => {
                      onCloseOverlay();
                    }}
                    className={classnames({
                      [styles.dropdown]: true,
                      [styles[state]]: true,
                    })}
                  >
                    {v.overlay}
                  </div>
                );
              }}
            </Transition>
          );
        })}
      </div>
    );
  }
}

export default Game;

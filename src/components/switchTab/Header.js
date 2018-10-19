import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Header.less';
import { HeaderItem } from './HeaderItem';
import DATE_ACTIVE from '../../assets/date-active.png';
import DATE_INACTIVE from '../../assets/date-inactive.png';
import LEAGUE_INACTIVE from '../../assets/league-inactive.png';
import LEAGUE_ACTIVE from '../../assets/league-active.png';

const TAB_INDEXES = [0, 1];
export class Header extends Component {
  state = { activeIndex: 0 };

  handleActiveTab = activeIndex => this.setState({ activeIndex });

  render() {
    const { isWithPopup } = this.props;
    const wrapperClass = isWithPopup
      ? classnames(styles['wrapper'], styles['without-bottom-radius'])
      : styles['wrapper'];
    const isLeftActive = this.state.activeIndex === TAB_INDEXES[0];
    const isRightActive = !isLeftActive;

    return (
      <div className={wrapperClass}>
        <HeaderItem
          showCloseIcon={isWithPopup && isLeftActive}
          logo={isLeftActive ? DATE_ACTIVE : DATE_INACTIVE}
          text="Today"
          isActive={isLeftActive}
          handleClick={() => this.handleActiveTab(TAB_INDEXES[0])}
        />
        <HeaderItem
          showCloseIcon={isWithPopup && isRightActive}
          logo={isRightActive ? LEAGUE_ACTIVE : LEAGUE_INACTIVE}
          text="League"
          handleClick={() => this.handleActiveTab(TAB_INDEXES[1])}
          isActive={isRightActive}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import LiveNum from './LiveNum';
import ChoosePlay from './ChoosePlay';
import LeftTitle from '../label/LeftTitle';
import LabelRight from '../label/LabelRight';
import GamePlayModule from './GamePlayModule';
import { offset } from '../../utils/commonFn';
import styles from './index.less';

class MatchListTitle extends Component {
  constructor(props) {
    super(props);
    this.listTitle = React.createRef();
    this.state = {
      isOpenFlag: false,
      selectItem: this.props.chooseText,
      offsetTop: 0,
    };
  }
  handleChoose = isOpenFlag => {
    const { handleChoose } = this.props;
    this.setState({
      isOpenFlag,
    });
    handleChoose && handleChoose(isOpenFlag);
  };
  handleItem = item => {
    const { handleItem } = this.props;
    this.setState({
      selectItem: item,
    });
    handleItem && handleItem(item);
  };
  componentDidMount() {
    const offsetTop = offset(this.listTitle.current).top + this.listTitle.current.clientHeight;
    this.setState({ offsetTop: offsetTop });
  }

  render() {
    const { prefixCls, children } = this.props;
    const { isOpenFlag, selectItem, offsetTop } = this.state;

    const childrens = React.Children.map(children, option => {
      const { isOpen, chooseText, ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'LIVENUM') {
        return <LiveNum {...other} handleLive={this.props.handuleLive} />;
      } else if (option.type.COMPONENT_NAME === 'CHOOSEPLAY') {
        return (
          <ChoosePlay
            {...other}
            chooseText={selectItem}
            handleChoose={this.handleChoose}
            active={isOpenFlag}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'LEFTNODE') {
        return <LeftTitle {...other} clickLeftTitleText={this.props.clickLeftTitleText} />;
      } else if (option.type.COMPONENT_NAME === 'GAMEPLAYMODULE') {
        return (
          <GamePlayModule
            isOpen={isOpenFlag}
            {...other}
            handleItem={this.handleItem}
            handleLayer={this.handleChoose}
            offsetTop={offsetTop}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'LABELRIGHT') {
        return <LabelRight {...other} />;
      }
    });
    const clsName = `${prefixCls || 'default'}-match-list-title`;
    return (
      <div ref={this.listTitle} className={styles[clsName]}>
        {childrens}
      </div>
    );
  }
}
MatchListTitle.defaultProps = {
  prefixCls: 'default',
  chooseText: 'Reault 1x2',
  handleLive: () => {
    console.log('handuleLive --title ');
  },
  handleChoose: () => {
    console.log('handuleChoose --title ');
  },
  clickLeftTitleText: () => {
    console.log('clickLeftTitleText --title ');
  },
  handleItem: item => {
    console.log(item + 'handleItem --title ');
  },
};
export default MatchListTitle;

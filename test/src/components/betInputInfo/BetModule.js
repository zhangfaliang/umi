import React, { Component } from 'react';
import classnames from 'classnames';
import BetInfo from './BetInfo';
import BetInput from './BetInput';
import Keyboard from '../keyboard';
import styles from './index.less';
import { formatMoney } from '../../utils/commonFn';

class BetModule extends Component {
  static COMPONENT_NAME = 'BETMODULE';
  constructor(props) {
    super(props);
    this.state = {
      isShowKeyboard: false,
      keyboardValue: '0',
      possibleWin: '0',
      isShowBetModule: props.isShow,
      allInDisabled: false,
      fillInDisabled: false,
      isFillInActive: false,
      isAllInActive: false,
      isBetBtnActive: false,
    };
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.isShow !== this.props.isShow) {
      this.setState({
        isShowBetModule: nextProps.isShow,
      });
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.isShowBetModule) {
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
  handelFocusInput = () => {
    if (!this.state.isShowKeyboard) {
      this.setState(
        {
          isShowKeyboard: true,
        },
        () => {
          this.props.focusInput();
        }
      );
    }
  };
  handleKeyboardChange = value => {
    const { sp, allAmount, fillAmount } = this.props;
    let keyboardValue = value,
      allInDisabled = false,
      fillInDisabled = false;
    if (allAmount / 1 <= fillAmount / 1) {
      if (value / 1 >= allAmount / 1) {
        keyboardValue = allAmount;
        allInDisabled = true;
      }
    } else {
      if (value / 1 >= fillAmount / 1) {
        keyboardValue = fillAmount;
        fillInDisabled = true;
      } else if (value / 1 >= allAmount / 1) {
        keyboardValue = allAmount;
        fillInDisabled = false;
      }
    }

    keyboardValue = String(keyboardValue);
    const dotIndex = keyboardValue.indexOf('.');
    keyboardValue = dotIndex > -1 ? keyboardValue.slice(0, dotIndex) : keyboardValue;
    this.setState({
      keyboardValue,
      possibleWin: formatMoney(sp * Number(keyboardValue)),
      allInDisabled,
      fillInDisabled,
    });
  };

  handleInputChange = value => {
    console.log(value);
  };
  handleAllin = activeFlag => {
    const { sp, allAmount } = this.props;
    const dotIndex = String(allAmount).indexOf('.');
    const keyboardValue = dotIndex > -1 ? String(allAmount).slice(0, dotIndex) : allAmount;
    this.setState({
      keyboardValue,
      possibleWin: formatMoney(sp * Number(keyboardValue)),
      allInDisabled: true,
      isAllInActive: activeFlag,
    });
  };
  handleFillin = activeFlag => {
    const { sp, fillAmount, handleCloseBetModule } = this.props;
    this.setState({
      keyboardValue: fillAmount,
      possibleWin: formatMoney(sp * Number(fillAmount)),
      fillInDisabled: true,
      isFillInActive: activeFlag,
    });
  };
  handleBet = activeFlag => {
    this.setState({
      isBetBtnActive: activeFlag,
    });
    this.handleCloseBetModule();
  };
  handleCloseBetModule = e => {
    e && e.stopPropagation();
    const { handleCloseBetModule } = this.props;
    this.setState(
      {
        keyboardValue: '0',
        possibleWin: '0',
        isShowBetModule: false,
        allInDisabled: false,
        fillInDisabled: false,
        btnActive: false,
        isShowKeyboard: false,
        isFillInActive: false,
        isAllInActive: false,
        isBetBtnActive: false,
      },
      () => {
        handleCloseBetModule(false);
      }
    );
  };
  handleCloseKeyboard = e => {
    e.stopPropagation();
    this.setState({
      isShowKeyboard: false,
    });
  };
  render() {
    const { prefixCls, children, maskClosable, allAmount, fillAmount } = this.props;
    const {
      isShowBetModule,
      allInDisabled,
      fillInDisabled,
      isFillInActive,
      isAllInActive,
      isBetBtnActive,
    } = this.state;
    const clsName = classnames({
      [styles[`${prefixCls}-bet-module`]]: true,
      [styles.isShowBetModule]: isShowBetModule,
    });
    const { isShowKeyboard, keyboardValue, possibleWin, btnActive } = this.state;
    const childrens = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'BETINPUT') {
        return (
          <BetInput
            {...other}
            allAmount={allAmount}
            fillAmount={fillAmount}
            handleInputChange={this.handleInputChange}
            betDisabled={keyboardValue == 0}
            betAmount={keyboardValue}
            possibleWin={possibleWin}
            handleAllin={this.handleAllin}
            handleFillin={this.handleFillin}
            allInDisabled={allInDisabled}
            fillInDisabled={fillInDisabled}
            handleBet={this.handleBet}
            focusInput={this.handelFocusInput}
            btnActive={btnActive}
            isBetBtnActive={isBetBtnActive}
            isFillInActive={isFillInActive}
            isAllInActive={isAllInActive}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'BETINFO') {
        return <BetInfo {...other} handleDelete={this.handleCloseBetModule} />;
      } else if (option.type.COMPONENT_NAME === 'KEYBOARD') {
        return (
          <Keyboard
            {...other}
            handleChange={this.handleKeyboardChange}
            isShow={isShowKeyboard}
            value={keyboardValue}
          />
        );
      }
    });
    return (
      <div className={clsName} onClick={maskClosable && this.handleCloseKeyboard}>
        {childrens}
      </div>
    );
  }
}
BetModule.defaultProps = {
  prefixCls: 'default',
  sp: '2.7',
  allAmount: '23423423.34',
  fillAmount: '30000000000',
  isShow: false,
  maskClosable: true,
  handleCloseBetModule: () => {
    console.log('module----handleDelete');
  },
  handleBet: betInfo => {
    console.log('handleBet---module', betInfo);
  },
  focusInput: () => {
    console.log('focusInput---module');
  },
  handleKeyboardChange: value => {
    console.log('focusInput---module', value);
  },
};
export default BetModule;

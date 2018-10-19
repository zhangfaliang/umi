import React, { Component } from 'react';
import LeftTitle from './LeftTitle';
import LabelRight from './LabelRight';
import LabelCenter from './LabelCenter';
import styles from './index.less';
import classnames from 'classnames';
class Label extends Component {
  static COMPONENT_NAME = 'LABEL';
  handelClickTitleText = e => {
    e.preventDefault();
    const { clickTitleText, labelType } = this.props;

    this.props.clickTitleText && clickTitleText(labelType);
  };
  render() {
    const { children, prefixCls, leftNode, rightNode, showTBBorder, clickTitleText } = this.props;
    const childrens = React.Children.map(children, option => {
      const { ...ther } = option.props;
      if (option.type.COMPONENT_NAME === 'LEFTNODE') {
        return <LeftTitle {...ther} clickLeftTitleText={this.props.clickLeftTitleText} />;
      } else if (option.type.COMPONENT_NAME === 'LABLEDCENTER') {
        return <LabelCenter {...ther} />;
      } else if (option.type.COMPONENT_NAME === 'LABELRIGHT') {
        return <LabelRight {...ther} handleRightIcon={this.props.handleRightIcon} />;
      }
    });

    const clsNameStr = `${prefixCls || 'default'}-lable`;
    const claName = classnames({
      [styles[clsNameStr]]: true,
      [styles['showTBBorder']]: showTBBorder,
    });
    return (
      <div onClick={this.handelClickTitleText} className={claName}>
        {childrens}
      </div>
    );
  }
}
Label.defaultProps = {
  prefixCls: 'default',
  clickLeftTitleText: params => {
    console.log('clickLeftTitleText');
  },
  showTBBorder: false,
  clickTitleText: params => {
    console.log('clickTitleText');
  },
  handleRightIcon: () => {
    console.log('handleRightIcon');
  },
  labelType: '电竞',
};
export default Label;

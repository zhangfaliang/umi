import React, { Component } from 'react';
import Panel from './Panel';
import MatchDetailPanel from './MatchDetailPanel';
import styles from './index.less';
class Accordion extends Component {
  static COMPONENT_NAME = 'ACCORDION';
  constructor(props) {
    super(props);
    this.state = {
      activeKeyId: props.accordion
        ? props.activeKeyId || props.defaultActiveKey
        : props.defaultActiveKey,
    };
  }
  handlePanel = keyId => {
    const { handlePanel, accordion } = this.props;
    if (accordion) {
      this.setState(
        {
          activeKeyId: keyId,
        },
        () => {
          handlePanel && handlePanel(keyId);
        }
      );
    } else {
      handlePanel && handlePanel(keyId);
    }
  };

  render() {
    const { children, prefixCls, defaultActiveKey, accordion } = this.props;
    const { activeKeyId } = this.state;

    const childrens = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'PANEL') {
        return (
          <Panel
            {...other}
            handlePanel={this.handlePanel}
            accordion={accordion}
            activeKeyId={activeKeyId}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'MATCHDETAILPANEL') {
        return (
          <MatchDetailPanel
            {...other}
            handlePanel={this.handlePanel}
            handleHelpIcon={this.props.handleHelpIcon}
            handleStickIcon={this.props.handleStickIcon}
            accordion={accordion}
            activeKeyId={activeKeyId}
          />
        );
      }
    });

    const clsName = styles[`${prefixCls}-accordion`];
    return <div className={clsName}>{childrens}</div>;
  }
}
Accordion.defaultProps = {
  prefixCls: 'default',
  defaultActiveKey: 'basket',
  activeKeyId: 'basket',
  accordion: true,
  handlePanel: keyId => {
    console.log('handlePanel--' + keyId);
  },

  handleStickIcon: keyId => {
    console.log(keyId + 'Accordion ---handleStickIcon');
  },
  handleHelpIcon: keyId => {
    console.log(keyId + 'Accordion ----handleHelpIcon');
  },
};
export default Accordion;

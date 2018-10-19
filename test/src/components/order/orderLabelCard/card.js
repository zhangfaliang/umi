import React, { Component } from 'react';

class Card extends Component {
  render() {
    const children = React.Children.toArray(this.props.children);
    return children.map((v, k) => {
      return <div key={k}>{v}</div>;
    });
  }
}

export default Card;

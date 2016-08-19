import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color, code } = this.props;
    return (
      <div><p>{code}</p></div>
    );
  }
}


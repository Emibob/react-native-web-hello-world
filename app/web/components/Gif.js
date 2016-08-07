import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, url, color } = this.props;
    return (
      <div className="hello-world" onClick={onClick} style={{color: color}}>Get New Gif</div>
      <img src=url />
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}

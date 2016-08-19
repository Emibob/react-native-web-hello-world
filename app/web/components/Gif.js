import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, url, color } = this.props;
    return (
    <div>
      <div onClick={onClick} style={{color: color}}>Get New Gif</div>
      <img style={{border: '5px solid green', width: 400, height: 400}} src={url} />
     </div>
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
}

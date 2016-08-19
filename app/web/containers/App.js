import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import Gif from '../components/Gif';
// actions
import {
  toggleColor,
  toggleGif,
  getSecretCode,
} from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {

  componentWillMount() {
    this.props.dispatch(getSecretCode());
  }

  render() {
    // injected by connect call
    const { dispatch, color, data, gifUrl, code, } = this.props;

    return (
      <div className="react-native-web">
        <Gif 
          onClick={() => dispatch(toggleGif())}
          url={gifUrl}
        />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
          code={code}
        />
      </div>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);

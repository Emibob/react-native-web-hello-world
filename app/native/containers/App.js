import React, { Component, View, PropTypes } from 'react-native';
import { connect }  from 'react-redux/native';
import { appStyle } from '../styles/styles';
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
    const {dispatch, color, data, gifUrl, code, } = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <Gif 
          onPress={() => dispatch(toggleGif())}
          url={gifUrl}
        />
        <HelloWorld
          onPress={() => dispatch(toggleColor())}
          color={color}
          code={code}
        />
      </View>
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

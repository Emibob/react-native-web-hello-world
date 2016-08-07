import React, {
  Component,
  PropTypes,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HelloWorld extends Component {

  render() {
    const { onPress, code } = this.props;

    return (
      <View style={{flex: 0.5}}>
        <Text onPress={onPress} style={{color: 'white', textAlign: 'center', fontSize: 20, }}>
          {code}
        </Text>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
}

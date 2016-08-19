import React, {
  Component,
  PropTypes,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    const { onPress, url } = this.props;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableHighlight onPress={onPress}>
        	<Text style={{color: 'white', textAlign: 'center', fontSize: 30, }}>Get New Gif</Text>
        </TouchableHighlight>
        <Image 
      		source={{uri: url}}
      		style={{width: 400, height: 400, borderWidth: 3, borderColor: 'blue'}}
      	/>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
}

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class BeingAwareScreen extends Component {
  static navigationOptions = {
    title: 'BeingAware'
  };
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          BeingAware
        </Text>
      </View>
    );
  }
}

export default BeingAwareScreen;

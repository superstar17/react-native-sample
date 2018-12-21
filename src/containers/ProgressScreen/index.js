import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class ProgressScreen extends Component {
  static navigationOptions = {
    title: 'Progress'
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
          Progress
        </Text>
      </View>
    )
  }
}

export default ProgressScreen;

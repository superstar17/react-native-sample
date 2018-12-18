import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <Text>
          Progress
        </Text>
      </SafeAreaView>
    )
  }
}

export default ProgressScreen;

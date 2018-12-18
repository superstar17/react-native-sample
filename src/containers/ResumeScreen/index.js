import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';
import { styles } from './styles';

class ResumeScreen extends Component {
  static navigationOptions = {
    title: 'Resume'
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
          Resume
        </Text>
      </SafeAreaView>
    )
  }
}

export default ResumeScreen;

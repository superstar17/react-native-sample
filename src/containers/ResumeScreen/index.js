import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
      <View style={styles.container}>
        <Text>
          Resume
        </Text>
      </View>
    )
  }
}

export default ResumeScreen;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class MindfulnessScreen extends Component {
  static navigationOptions = {
    title: 'Mindfulness'
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
          Mindfulness
        </Text>
      </View>
    );
  }
}

export default MindfulnessScreen;

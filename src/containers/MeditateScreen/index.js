import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class MeditateScreen extends Component {
  static navigationOptions = {
    title: 'Meditate'
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
          Meditate
        </Text>
      </View>
    );
  }
}

export default MeditateScreen;

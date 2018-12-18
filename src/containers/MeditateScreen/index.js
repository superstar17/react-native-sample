import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <Text>
          Meditate
        </Text>
      </SafeAreaView>
    )
  }
}

export default MeditateScreen;

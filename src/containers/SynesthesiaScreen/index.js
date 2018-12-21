import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class SynesthesiaScreen extends Component {
  static navigationOptions = {
    title: 'Synesthesia'
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
          Synesthesia
        </Text>
      </View>
    );
  }
}

export default SynesthesiaScreen;

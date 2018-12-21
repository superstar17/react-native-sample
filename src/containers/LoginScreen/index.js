import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
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
          Login
        </Text>
      </View>
    );
  }
}

export default LoginScreen;

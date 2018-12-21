import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onPress = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.loginBtnContainer} onPress={this.onPress}>
          <Text>
            Log in
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

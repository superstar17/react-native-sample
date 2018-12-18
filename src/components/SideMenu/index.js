import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';
import { styles } from './styles';

export class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          SideMenu
        </Text>
      </SafeAreaView>
    );
  }
}

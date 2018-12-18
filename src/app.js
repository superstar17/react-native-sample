import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StatusBar, StyleSheet } from 'react-native';
import Routing from './routing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Routing />
  </SafeAreaView>
);

export default App;
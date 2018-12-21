import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import {
  MainContainer,
  LoginScreen
} from './containers';
import { TabBar, SideMenu } from './components';

const DrawerMenu = createDrawerNavigator({
  MainContainer: { screen: MainContainer },
}, {
  contentComponent: props => <SideMenu {...props} />,
  initialRouteName: 'MainContainer'
});

const Routing = createStackNavigator({
  DrawerMenu: { screen: DrawerMenu },
  LoginScreen: { screen: LoginScreen }
}, {
  initialRouteName: 'DrawerMenu',
  headerMode: 'none',
  gesturesEnabled: Platform.OS !== 'ios'
});

export default Routing;
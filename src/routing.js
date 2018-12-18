import React from 'react';
import { createDrawerNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {
  ProgressScreen,
  MeditateScreen,
  ResumeScreen,
} from './containers';
import { TabBar, SideMenu } from './components';

const TopBar = createMaterialTopTabNavigator({
  ResumeScreen: { screen: ResumeScreen },
  ProgressScreen: { screen: ProgressScreen },
  MeditateScreen: { screen: MeditateScreen },
}, {
  initialRouteName: 'ResumeScreen',
  tabBarComponent: props => (<TabBar {...props} />),
  tabBarOptions: {
    activeTintColor: 'red',
    indicatorStyle: {
      backgroundColor: 'transparent'
    }
  }
});

const DrawerMenu = createDrawerNavigator({
  TopBar: { screen: TopBar },
}, {
  contentComponent: props => <SideMenu {...props} />,
  initialRouteName: 'TopBar'
});

const Routing = createStackNavigator({
  DrawerMenu: { screen: DrawerMenu }
}, {
  initialRouteName: 'DrawerMenu',
  headerMode: 'none'
});

export default Routing;
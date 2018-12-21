import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TopTabBar, BottomTabBar } from './../../components';
import {
  MeditateScreen,
  ResumeScreen,
  ProgressScreen,
  MindfulnessScreen,
  BeingAwareScreen,
  SynesthesiaScreen } from '..';

import { styles } from './styles';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    }
  }

  onNavigate = (index) => {
    if (index === 0) {
      this.props.navigation.openDrawer();
    } else {
      this.setState({ activeIndex: index });
    }
  };

  renderMainContainer = () => {
    const { activeIndex } = this.state;
    switch (activeIndex) {
      case 1:
        return (
          <ResumeScreen {...this.props} />
        );
      case 2:
        return (
          <ProgressScreen {...this.props} />
        );
      case 3:
        return (
          <MeditateScreen {...this.props} />
        );
      case 4:
        return (
          <SynesthesiaScreen {...this.props} />
        );
      case 5:
        return (
          <MindfulnessScreen {...this.props} />
        );
      case 6:
        return (
          <BeingAwareScreen {...this.props} />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopTabBar {...this.props} onNavigate={this.onNavigate} />
        {this.renderMainContainer()}
        <BottomTabBar {...this.props} onNavigate={this.onNavigate} />
      </SafeAreaView>
    );
  }
}

export default MainContainer;

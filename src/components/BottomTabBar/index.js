import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const titles = [
  'Synesthesia',
  'Mindfulness',
  'Being Aware',
];

export class BottomTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    }
  }


  onNavigate = (index) => {
    this.setState({ activeIndex: index });
    this.props.onNavigate(index + 4);
  };

  render() {
    const { navigation } = this.props;
    const { activeIndex } = this.state;

    return (
      <View style={styles.tabContainer}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity style={styles.iconTouchContainer}>
            <Icon name="ios-arrow-back" size={20} color="white"/>
          </TouchableOpacity>
        </View>
        {titles.map((route, idx) => {
          const color = (activeIndex === idx) ? 'white' : 'gray';
          const isActive = activeIndex === idx;
          return (
            <View style={styles.tab} key={`key-${idx}`}>
              <TouchableOpacity style={styles.subTab} onPress={() => this.onNavigate(idx)}>
                <Text style={{ color, fontSize: 12 }}>{titles[idx]}</Text>
                {isActive && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

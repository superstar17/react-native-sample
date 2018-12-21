import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const titles = [
  'Menu',
  'Resume',
  'Progress',
  'Meditate',
];

export class TopTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    }
  }


  onNavigate = (index) => {
    this.props.onNavigate(index);
    if (index !== 0) {
      this.setState({ activeIndex: index });
    }
  };

  render() {
    const { navigation } = this.props;
    const { activeIndex } = this.state;

    return (
      <View style={styles.tabContainer}>
        {titles.map((route, idx) => {
          const color = (activeIndex === idx) ? 'white' : 'gray';
          const isActive = activeIndex === idx;
          return (
            <View style={styles.tab} key={`key-${idx}`}>
              <TouchableOpacity style={styles.subTab} onPress={() => this.onNavigate(idx)}>
                <Text style={{ color, fontSize: 12 }}>{titles[idx]}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

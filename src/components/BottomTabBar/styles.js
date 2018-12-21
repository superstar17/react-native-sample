import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    width,
    borderTopColor: 'transparent'
  },
  tab: {
    flex: 1,
    height: 50,
    backgroundColor: 'black'
  },
  subTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  arrowContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  iconTouchContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    height: 2,
    backgroundColor: '#8436f1',
    position: 'absolute',
    bottom: 0,
    right: 15,
    left: 15
  }
});
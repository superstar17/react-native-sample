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
    height: 48,
    backgroundColor: 'black'
  },
  subTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});
import {StyleSheet} from 'react-native';
import {ThemeColor} from '../../constants';

export const useProductDetailScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 32,
      paddingHorizontal: 26,
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContentContainer: {},
    heading: {
      color: ThemeColor.Text,
      fontSize: 20,
      fontWeight: '500',
    },
    subHeading: {
      fontSize: 14,
      color: ThemeColor.Text,
    },
    logo: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 100,
      height: 100,
    },
    fields: {
      gap: 16,
      marginTop: 48,
      paddingHorizontal: 8,
    },
    footer: {
      gap: 10,
    },
  });

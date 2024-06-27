import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../../../constants';

export const useProductItemStyles = () =>
  StyleSheet.create({
    touchable: {
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    wrapper: {
      flex: 1,
    },
    nameField: {
      fontWeight: 'bold',
      color: ThemeColor.Text,
    },
    idField: {
      color: ThemeColor.Text,
    },
    rightIcon: {
      fontSize: 24,
      paddingLeft: 12,
    },
  });

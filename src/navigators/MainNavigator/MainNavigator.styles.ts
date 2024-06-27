import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useMainNavigatorStyles = () =>
  StyleSheet.create({
    headerTitle: {
      fontSize: 16,
      color: ThemeColor.HeaderTitle,
    },
    content: {
      backgroundColor: ThemeColor.Background,
      borderTopWidth: 1,
      borderTopColor: ThemeColor.Border,
    },
  });

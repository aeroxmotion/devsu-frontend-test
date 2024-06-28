import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useMainNavigatorStyles = () =>
  StyleSheet.create({
    content: {
      backgroundColor: ThemeColor.Background,
      borderTopWidth: 1,
      borderTopColor: ThemeColor.Border,
    },
  });

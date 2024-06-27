import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useInputStyles = () =>
  StyleSheet.create({
    input: {
      borderColor: ThemeColor.Border,
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  });

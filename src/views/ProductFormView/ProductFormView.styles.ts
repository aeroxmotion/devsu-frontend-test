import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useProductFormViewStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 26,
      paddingHorizontal: 20,
    },
    form: {
      flex: 1,
    },
    formContent: {
      gap: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: ThemeColor.Text,
    },
    footer: {
      paddingTop: 32,
      gap: 8,
    },
  });

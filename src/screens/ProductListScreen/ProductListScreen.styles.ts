import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';

export const useProductListScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 32,
      paddingHorizontal: 24,
      paddingVertical: 40,
    },
    productListContainer: {
      flexGrow: 0,
      borderColor: ThemeColor.Border,
      borderWidth: 1,
      borderRadius: 8,
    },
    productListSeparator: {
      height: 1,
      backgroundColor: ThemeColor.Border,
    },
    footerButton: {
      marginTop: 'auto',
    },
  });

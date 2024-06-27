import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';
import {type UseProductDetailScreenStyleProps} from '../ProductListScreen/ProductListScreen.types';

export const PRODUCT_LOGO_WIDTH = 100;

export const useProductDetailScreenStyles = (
  props: UseProductDetailScreenStyleProps,
) =>
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
      width: PRODUCT_LOGO_WIDTH,
      height: props.logoHeight,
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

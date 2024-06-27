import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../constants';
import {type UseInputStylesProps} from './Input.types';

export const useInputStyles = (props: UseInputStylesProps) =>
  StyleSheet.create({
    input: {
      borderColor: props.hasError ? ThemeColor.Error : ThemeColor.Border,
      fontSize: 14,
      color: props.disabled ? ThemeColor.DisabledText : ThemeColor.Text,
      borderWidth: 1,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: props.disabled ? ThemeColor.Disabled : undefined,
    },
    inputError: {
      borderColor: ThemeColor.Error,
    },
    label: {
      fontSize: 12,
      color: ThemeColor.Text,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    error: {
      fontSize: 11,
      marginTop: 4,
      color: ThemeColor.Error,
    },
  });

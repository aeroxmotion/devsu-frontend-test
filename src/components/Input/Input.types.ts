import {type ReactNode} from 'react';
import {type TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  label?: ReactNode;
  error?: ReactNode;
  disabled?: boolean;
}

export interface UseInputStylesProps {
  hasError: boolean;
  disabled: boolean;
}

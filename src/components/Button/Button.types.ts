import {type TouchableOpacityProps} from 'react-native';

export interface ButtonProps
  extends TouchableOpacityProps,
    UseButtonStylesProps {}

export interface UseButtonStylesProps {
  color: string;
  background: string;
}

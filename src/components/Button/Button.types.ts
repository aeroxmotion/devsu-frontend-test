import {type TouchableOpacityProps} from 'react-native';

export interface ButtonProps
  extends TouchableOpacityProps,
    UseButtonStylesProps {
  loading?: boolean;
}

export interface UseButtonStylesProps {
  color: string;
  background: string;
}

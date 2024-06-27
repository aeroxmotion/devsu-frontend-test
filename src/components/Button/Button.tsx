import React, {type FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import {type ButtonProps} from './Button.types';
import {useButtonStyles} from './Button.styles';

export const Button: FC<ButtonProps> = ({
  color,
  loading,
  background,

  style,
  children,
  ...props
}) => {
  const styles = useButtonStyles({
    color,
    background,
  });

  return (
    <TouchableOpacity style={[styles.touchable, style]} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

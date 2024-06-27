import React, {type FC} from 'react';
import {Text, TextInput, Pressable} from 'react-native';

import {InputProps} from './Input.types';
import {useInputStyles} from './Input.styles';

export const Input: FC<InputProps> = ({
  label,
  error,
  style,
  editable,
  disabled,
  onPress,
  ...props
}) => {
  const styles = useInputStyles({
    hasError: !!error,
    disabled: !!disabled,
  });

  return (
    <Pressable onPress={disabled ? undefined : onPress}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        editable={disabled != null ? !disabled : editable}
        style={[styles.input, style]}
        {...props}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </Pressable>
  );
};

import React, {type FC} from 'react';
import {Text, TextInput, Pressable, View} from 'react-native';

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

      <View pointerEvents={onPress ? 'none' : 'auto'}>
        <TextInput
          editable={disabled != null ? !disabled : editable}
          style={[styles.input, style]}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </Pressable>
  );
};

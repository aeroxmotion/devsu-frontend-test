import React, {type FC} from 'react';
import {TextInput} from 'react-native';

import {InputProps} from './Input.types';
import {useInputStyles} from './Input.styles';

export const Input: FC<InputProps> = ({style, ...props}) => {
  const styles = useInputStyles();

  return <TextInput style={[styles.input, style]} {...props} />;
};

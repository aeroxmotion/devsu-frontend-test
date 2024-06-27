import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {type ProductDefailFieldProps} from './ProductDetailField.types';
import {ThemeColor} from '../../../../constants';

export const ProductDetailField: FC<ProductDefailFieldProps> = ({
  label,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>

      {typeof value === 'function' ? (
        value()
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    color: ThemeColor.Text,
    fontSize: 14,
  },
  value: {
    flex: 1,
    paddingLeft: 24,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
    color: ThemeColor.Text,
  },
});

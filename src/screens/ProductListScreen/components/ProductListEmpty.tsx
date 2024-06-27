import React, {type FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ThemeColor} from '../../../constants';

export const ProductListEmpty: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No se encontraron productos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: ThemeColor.Text,
  },
});

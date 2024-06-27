import React, {type FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {ThemeColor} from '../../../constants';

export const ProductListSeparator: FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: ThemeColor.Border,
  },
});

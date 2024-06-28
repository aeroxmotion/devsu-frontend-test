import React, {type FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {ThemeColor} from '../../../constants';

export const MainNavigatorTitle: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/bank-building.png')}
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={styles.title}>BANCO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: ThemeColor.HeaderTitle,
    fontWeight: 'bold',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});

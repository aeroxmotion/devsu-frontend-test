import React, {type FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {type ProductItemProps} from './ProductItem.types';
import {useProductItemStyles} from './ProductItem.styles';

export const ProductItem: FC<ProductItemProps> = ({product, onItemPress}) => {
  const styles = useProductItemStyles();

  return (
    <TouchableOpacity style={styles.touchable} onPress={onItemPress}>
      <View style={styles.wrapper}>
        <Text style={styles.nameField} numberOfLines={1}>
          {product.name}
        </Text>

        <Text style={styles.idField}>ID: {product.id}</Text>
      </View>

      <Text style={styles.rightIcon}>›</Text>
    </TouchableOpacity>
  );
};

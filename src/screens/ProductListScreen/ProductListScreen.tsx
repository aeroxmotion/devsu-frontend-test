import {FlatList, View} from 'react-native';
import React, {useState, type FC} from 'react';

import {
  ProductItem,
  ProductListEmpty,
  ProductListSeparator,
} from './components';
import {IProduct} from '../../api';
import {Input} from '../../components';
import {useFilterProductList} from './hooks';
import {useGetProductList} from '../../hooks';
import {useProductListScreenStyles} from './ProductListScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorRoute} from '../../navigators';

export const ProductListScreen: FC = () => {
  const navigation = useNavigation();
  const styles = useProductListScreenStyles();
  const {data, isFetching: _} = useGetProductList();

  const [searchCriteria, setSearchCriteria] = useState('');
  const filteredProducts = useFilterProductList(data?.data, searchCriteria);

  const goToProductDetail = (product: IProduct) => {
    navigation.navigate(MainNavigatorRoute.ProductDetail, {product});
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Búsqueda..."
        value={searchCriteria}
        onChangeText={setSearchCriteria}
      />

      <FlatList
        data={filteredProducts}
        style={styles.productListContainer}
        ItemSeparatorComponent={ProductListSeparator}
        ListEmptyComponent={ProductListEmpty}
        renderItem={({item: product}) => (
          <ProductItem product={product} onItemPress={goToProductDetail} />
        )}
      />
    </View>
  );
};

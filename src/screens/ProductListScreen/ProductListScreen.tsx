import {FlatList, View} from 'react-native';
import React, {useState, type FC} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  ProductItem,
  ProductListEmpty,
  ProductListSeparator,
} from './components';
import {IProduct} from '../../api';
import {ThemeColor} from '../../constants';
import {useFilterProductList} from './hooks';
import {useGetProductList} from '../../hooks';
import {Button, Input} from '../../components';
import {MainNavigatorRoute} from '../../navigators';
import {useProductListScreenStyles} from './ProductListScreen.styles';

export const ProductListScreen: FC = () => {
  const navigation = useNavigation();
  const styles = useProductListScreenStyles();
  const {data, isFetching: _} = useGetProductList();

  const [searchCriteria, setSearchCriteria] = useState('');
  const filteredProducts = useFilterProductList(data?.data, searchCriteria);

  const goToProductDetail = (product: IProduct) => {
    navigation.navigate(MainNavigatorRoute.ProductDetail, {product});
  };

  const goToNewProduct = () => {
    navigation.navigate(MainNavigatorRoute.NewProduct, {});
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

      <Button
        style={styles.footerButton}
        color={ThemeColor.PrimaryButtonColor}
        background={ThemeColor.PrimaryButtonBackground}
        onPress={goToNewProduct}>
        Agregar
      </Button>
    </View>
  );
};

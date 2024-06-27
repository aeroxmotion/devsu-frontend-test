import {FlatList, View} from 'react-native';
import React, {useState, type FC} from 'react';

import {Input} from '../../components';
import {ProductItem} from './components';
import {useFilterProductList} from './hooks';
import {useGetProductList} from '../../hooks';
import {useProductListScreenStyles} from './ProductListScreen.styles';

const ProductListSeparator: FC = () => {
  const styles = useProductListScreenStyles();

  return <View style={styles.productListSeparator} />;
};

export const ProductListScreen: FC = () => {
  const styles = useProductListScreenStyles();
  const {data, isFetching} = useGetProductList();

  const [searchCriteria, setSearchCriteria] = useState('');
  const filteredProducts = useFilterProductList(data?.data, searchCriteria);

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
        renderItem={({item: product}) => (
          <ProductItem product={product} onItemPress={() => {}} />
        )}
      />
    </View>
  );
};

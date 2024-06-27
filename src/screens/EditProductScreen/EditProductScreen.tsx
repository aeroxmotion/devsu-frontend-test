import React, {type FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {IProduct} from '../../api';
import {ProductFormView} from '../../views';
import {useUpdateProduct} from '../../hooks';
import {MainNavigatorRoute} from '../../navigators';

export const EditProductScreen: FC = () => {
  const navigation = useNavigation();
  const updateProductMutation = useUpdateProduct();

  const {product} = useRoute().params as {product: IProduct};

  const goBackToProductDetail = (updatedProduct: IProduct) => {
    navigation.navigate(MainNavigatorRoute.ProductDetail, {
      product: updatedProduct,
    });
  };

  return (
    <ProductFormView
      title="Editar producto"
      product={product}
      onFormSubmit={updatedProduct =>
        updateProductMutation.mutateAsync(updatedProduct, {
          onSuccess({data}) {
            goBackToProductDetail({...data, id: updatedProduct.id});
          },
        })
      }
    />
  );
};

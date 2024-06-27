import React, {type FC} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ProductFormView} from '../../views';
import {useAddNewProduct} from '../../hooks';

export const NewProductScreen: FC = () => {
  const navigation = useNavigation();
  const addNewProductMutation = useAddNewProduct();

  return (
    <ProductFormView
      title="Nuevo producto"
      onFormSubmit={product =>
        addNewProductMutation.mutate(product, {
          onSuccess() {
            navigation.goBack();
          },
        })
      }
    />
  );
};

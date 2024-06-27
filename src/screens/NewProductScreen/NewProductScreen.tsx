import React, {type FC} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ProductFormView} from '../../views';
import {useAddNewProduct} from '../../hooks';
import Toast from 'react-native-toast-message';

export const NewProductScreen: FC = () => {
  const navigation = useNavigation();
  const addNewProductMutation = useAddNewProduct();

  return (
    <ProductFormView
      title="Nuevo producto"
      onFormSubmit={product =>
        addNewProductMutation.mutateAsync(product, {
          onSuccess() {
            Toast.show({
              type: 'success',
              text1: 'Producto creado exitosamente.',
              visibilityTime: 2000,
            });

            navigation.goBack();
          },
        })
      }
    />
  );
};

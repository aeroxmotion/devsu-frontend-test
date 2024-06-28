import React, {FC, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';

import {
  PRODUCT_LOGO_WIDTH,
  useProductDetailScreenStyles,
} from './ProductDetailScreen.styles';
import {IProduct} from '../../api';
import {formatDate} from '../../utils';
import {ThemeColor} from '../../constants';
import {ProductDetailField} from './components';
import {MainNavigatorRoute} from '../../navigators';
import {BottomSheet, Button} from '../../components';
import {useAutoScaleImageHeight, useDeleteProduct} from '../../hooks';

export const ProductDetailScreen: FC = () => {
  const navigation = useNavigation();
  const {product} = useRoute().params as {product: IProduct};
  const productLogoHeight = useAutoScaleImageHeight(
    PRODUCT_LOGO_WIDTH,
    product.logo,
  );
  const styles = useProductDetailScreenStyles({
    logoHeight: productLogoHeight,
  });
  const deleteProductMutation = useDeleteProduct();

  const [visibleDeleteProductBottomSheet, setVisibleDeleteProductBottomSheet] =
    useState(false);

  const goToEditProduct = () => {
    navigation.navigate(MainNavigatorRoute.EditProduct, {product});
  };

  const openDeleteProductBottomSheet = () => {
    setVisibleDeleteProductBottomSheet(true);
  };

  const closeDeleteOpenProductBottomSheet = () => {
    setVisibleDeleteProductBottomSheet(false);
  };

  const confirmProductDeletion = async () => {
    await deleteProductMutation.mutateAsync(product.id);

    closeDeleteOpenProductBottomSheet();
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Text style={styles.heading}>ID: {product.id}</Text>
          <Text style={styles.subHeading}>Información extra</Text>

          <View style={styles.fields}>
            <ProductDetailField label="Nombre" value={product.name} />
            <ProductDetailField
              label="Descripción"
              value={product.description}
            />

            <ProductDetailField
              label="Logo"
              // eslint-disable-next-line react/no-unstable-nested-components
              value={() => (
                <Image
                  testID="image-logo"
                  source={{uri: product.logo}}
                  style={styles.logo}
                  resizeMode="contain"
                />
              )}
            />

            <ProductDetailField
              label="Fecha liberación"
              value={formatDate(product.date_release)}
            />

            <ProductDetailField
              label="Fecha revisión"
              value={formatDate(product.date_revision)}
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button
            color={ThemeColor.SimpleButtonColor}
            background={ThemeColor.SimpleButtonBackground}
            onPress={goToEditProduct}>
            Editar
          </Button>

          <Button
            color={ThemeColor.DeleteButtonColor}
            background={ThemeColor.DeleteButtonBackground}
            onPress={openDeleteProductBottomSheet}>
            Eliminar
          </Button>
        </View>
      </View>

      <BottomSheet
        testID="delete-product-bottom-sheet"
        content={`¿Estás seguro de eliminar el producto ${product.name}?`}
        visible={visibleDeleteProductBottomSheet}
        onClose={closeDeleteOpenProductBottomSheet}
        footer={
          <View style={styles.bottomSheetButtonsContainer}>
            <Button
              testID="confirm-deletion-btn"
              color={ThemeColor.PrimaryButtonColor}
              loading={deleteProductMutation.isLoading}
              background={ThemeColor.PrimaryButtonBackground}
              onPress={confirmProductDeletion}>
              Confirmar
            </Button>

            <Button
              color={ThemeColor.SimpleButtonColor}
              background={ThemeColor.SimpleButtonBackground}
              onPress={closeDeleteOpenProductBottomSheet}>
              Cancelar
            </Button>
          </View>
        }
      />
    </>
  );
};

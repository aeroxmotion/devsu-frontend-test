import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';

import {IProduct} from '../../api';
import {formatDate} from '../../utils';
import {Button} from '../../components';
import {ThemeColor} from '../../constants';
import {ProductDetailField} from './components';
import {useProductDetailScreenStyles} from './ProductDetailScreen.styles';

export const ProductDetailScreen: FC = () => {
  const styles = useProductDetailScreenStyles();
  const {product} = useRoute().params as {product: IProduct};

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Text style={styles.heading}>ID: {product.id}</Text>
        <Text style={styles.subHeading}>Información extra</Text>

        <View style={styles.fields}>
          <ProductDetailField label="Nombre" value={product.name} />
          <ProductDetailField label="Descripción" value={product.description} />

          <ProductDetailField
            label="Logo"
            // eslint-disable-next-line react/no-unstable-nested-components
            value={() => (
              <Image
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
          background={ThemeColor.SimpleButtonBackground}>
          Editar
        </Button>

        <Button
          color={ThemeColor.DeleteButtonColor}
          background={ThemeColor.DeleteButtonBackground}>
          Eliminar
        </Button>
      </View>
    </View>
  );
};

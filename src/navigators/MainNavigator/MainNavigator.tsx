import React, {type FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {MainNavigatorRoute} from './MainNavigator.types';
import {useMainNavigatorStyles} from './MainNavigator.styles';
import {ProductDetailScreen, ProductListScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const MainNavigator: FC = () => {
  const styles = useMainNavigatorStyles();

  const screenOptions: NativeStackNavigationOptions = {
    headerTitle: 'BANCO',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: styles.headerTitle,
    contentStyle: styles.content,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MainNavigatorRoute.ProductList}
        screenOptions={screenOptions}>
        <Stack.Screen
          name={MainNavigatorRoute.ProductList}
          component={ProductListScreen}
        />

        <Stack.Screen
          name={MainNavigatorRoute.ProductDetail}
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

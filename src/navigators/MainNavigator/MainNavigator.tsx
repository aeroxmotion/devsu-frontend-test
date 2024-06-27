import React, {type FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {ProductListScreen} from '../../screens';
import {MainNavigatorRoute} from './MainNavigator.types';
import {useMainNavigatorStyles} from './MainNavigator.styles';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

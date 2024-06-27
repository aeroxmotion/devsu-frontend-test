import React, {type FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {MainNavigator} from './src';

export const queryClient = new QueryClient();

export const App: FC = () => {
  const styles = StyleSheet.create({
    container: {flex: 1},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

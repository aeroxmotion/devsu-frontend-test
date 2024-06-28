import React, {type FC} from 'react';
import Toast from 'react-native-toast-message';
import {QueryClientProvider} from 'react-query';
import {SafeAreaView, StyleSheet} from 'react-native';

import {MainNavigator, queryClient} from './src';

export const App: FC = () => {
  const styles = StyleSheet.create({
    container: {flex: 1},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>

      <Toast />
    </QueryClientProvider>
  );
};

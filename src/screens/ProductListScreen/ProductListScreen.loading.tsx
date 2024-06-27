import React, {type FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {ThemeColor} from '../../constants';

export const ProductListScreenLoading: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SkeletonPlaceholder borderRadius={6}>
        {
          [...Array(5)].map((_, i) => (
            <SkeletonPlaceholder.Item key={i} padding={16}>
              <SkeletonPlaceholder.Item width={120} height={16} />
              <SkeletonPlaceholder.Item width={200} height={16} marginTop={8} />
            </SkeletonPlaceholder.Item>
          )) as any
        }
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    borderColor: ThemeColor.Border,
    borderWidth: 1,
    borderRadius: 8,
  },
});

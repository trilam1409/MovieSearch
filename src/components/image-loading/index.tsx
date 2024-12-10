import FastImage, { FastImageProps } from 'react-native-fast-image';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export function ImageLoading({...props}: FastImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View>
      <FastImage
        {...props}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && <ActivityIndicator style={styles.loading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});

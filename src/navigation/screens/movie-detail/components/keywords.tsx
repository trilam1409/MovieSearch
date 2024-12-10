import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';
import React from 'react';

export function Keywords() {
  const movieDetail = useAppSelector(selectMovieDetail);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keywords:</Text>
      <Text>{movieDetail?.keywords?.replaceAll(',', ', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
});

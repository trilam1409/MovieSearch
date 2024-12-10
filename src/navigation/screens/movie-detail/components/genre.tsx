import React from 'react';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';
import { StyleSheet, Text, View } from 'react-native';

export function Genre() {
  const movieDetail = useAppSelector(selectMovieDetail);

  if (!movieDetail?.genre.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {movieDetail.genre.map((value) => (
        <View key={value} style={styles.item}>
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#edede9',
    marginRight: 8,
    borderRadius: 30,
  },
});


import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';
import React from 'react';

export function Actors() {
  const movieDetail = useAppSelector(selectMovieDetail);
  const actorsLength = movieDetail?.actor.length;

  if (!actorsLength) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actors:</Text>
      <View style={styles.content}>
        {movieDetail.actor.map(({name}, index) => (
          <Text key={name}>{name}{index === actorsLength - 1 ? null : ', '}</Text>
        ))}
      </View>
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
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

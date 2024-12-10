import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';

export function Content() {
  const movieDetail = useAppSelector(selectMovieDetail);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {movieDetail?.name}
        </Text>
        <Text style={styles.rating}>⭐ {movieDetail?.aggregateRating?.ratingValue}</Text>
      </View>

      <Text style={styles.description}>{movieDetail?.description}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 8,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';
import { WebViewAutoHeight } from '../../../../components/webview-auto-height';

export function Review() {
  const movieDetail = useAppSelector(selectMovieDetail);

  if (!movieDetail?.review) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review:</Text>
      <View style={styles.box}>
        <Text style={styles.author}>{movieDetail?.review?.author?.name}</Text>
        <Text>{movieDetail?.review?.dateCreated}</Text>
        <Text style={styles.reviewTitle}>{movieDetail?.review?.name}</Text>
        <WebViewAutoHeight html={movieDetail?.review?.reviewBody || ''} />
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
  box: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    padding: 12,
    gap: 4,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});


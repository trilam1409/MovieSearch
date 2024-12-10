import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Thumbnail } from './components/thumbnail.tsx';
import { Content } from './components/content.tsx';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks.ts';
import React, { useEffect } from 'react';
import { fetchData, selectFetchLoading } from './movie-detail-slice.ts';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../index.tsx';
import { LoadingFullscreen } from '../../../components/loading-fullscreen';
import { Genre } from './components/genre.tsx';
import { Actors } from './components/actors.tsx';
import { Keywords } from './components/keywords.tsx';
import { Review } from './components/review.tsx';

export function MovieDetail() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MovieDetailScreen'>>();
  const dispatch = useAppDispatch();

  const fetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchData(params.id));
  }, []);

  if (fetchLoading) {
    return <LoadingFullscreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Thumbnail />
        <Genre />
        <Content />
        <Actors />
        <Keywords />
        <Review />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

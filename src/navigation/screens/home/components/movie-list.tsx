import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import React from 'react';
import { MovieCard } from './movie-card.tsx';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectFetchLoading, selectMovieData, selectSearchResults } from '../home-slice.ts';
import { MovieEmpty } from './movie-empty.tsx';
import { LoadingFullscreen } from '../../../../components/loading-fullscreen';
import { MovieData } from 'fetch-movie-sdk';

export function MovieList() {
  const movieData = useAppSelector(selectMovieData);
  const searchResults = useAppSelector(selectSearchResults);

  const fetchLoading = useAppSelector(selectFetchLoading);

  const _renderItem = ({item}: ListRenderItemInfo<MovieData>) => {
    return <MovieCard item={item} />;
  };

  if (fetchLoading) {
    return (
      <LoadingFullscreen />
    );
  }

  return (
    <FlatList
      data={searchResults.length ? searchResults : movieData}
      renderItem={_renderItem}
      numColumns={2}
      keyExtractor={(item) => item['#IMDB_ID']}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={styles.contentContainerStyle}
      ListEmptyComponent={MovieEmpty}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  contentContainerStyle: {
    padding: 8,
  },
});

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MovieList } from './components/movie-list.tsx';
import { Search } from './components/search.tsx';
import { fetchMovieData } from './home-slice.ts';
import { useAppDispatch } from '../../../utils/hooks.ts';

export function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <MovieList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
  },
});

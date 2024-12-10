import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonRound } from '../../../../components/button-round';
import { useNavigation } from '@react-navigation/native';
import { MovieData } from 'fetch-movie-sdk';
import { ImageLoading } from '../../../../components/image-loading';

type Props = {
  item: MovieData
}

export function MovieCard({item}: Props) {
  const {navigate} = useNavigation();

  const _onPress = () => {
    navigate('MovieDetailScreen', {id: item['#IMDB_ID']});
  };

  return (
    <Pressable style={styles.container} onPress={_onPress}>
      <ImageLoading style={styles.image} source={{uri: item['#IMG_POSTER']}} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{item['#TITLE']}</Text>
        <ButtonRound title={'DETAIL'} onPress={_onPress} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    backgroundColor: '#f8f9fa',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  content: {
    padding: 8,
    gap: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

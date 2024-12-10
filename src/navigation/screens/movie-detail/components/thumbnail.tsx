import React from 'react';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectMovieDetail } from '../movie-detail-slice.ts';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageLoading } from '../../../../components/image-loading';

export function Thumbnail() {
  const movieDetail = useAppSelector(selectMovieDetail);
  const { goBack } = useNavigation();

  if (!movieDetail) {
    return null;
  }

  return (
    <View>
      <ImageLoading
        source={{uri: movieDetail.image}}
        style={styles.image}
      />
      <Pressable style={styles.backButton} onPress={goBack}>
        <Image style={styles.backIcon} source={require('../../../../assets/icon/left-arrow.png')} />
      </Pressable>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradientBackground}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  linearGradientBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  backButton: {
    position: 'absolute',
    width: 48,
    height: 48,
    left: 16,
    top: 16,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

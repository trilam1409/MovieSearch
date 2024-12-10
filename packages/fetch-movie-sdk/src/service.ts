import axiosInstance from './axios-instance';
import { getRandomCharacter } from './utils';

function fetchRandomMovies() {
  return axiosInstance.request({
    url: `/search?q=${getRandomCharacter()}`,
  });
}

function fetchMoviesByKeyword(keyword: string) {
  return axiosInstance.request({
    url: `/search?q=${keyword}`,
  });
}

function fetchMovieDetail(id: string) {
  return axiosInstance.request({
    url: `/search?tt=${id}`,
  });
}


export { fetchRandomMovies, fetchMoviesByKeyword, fetchMovieDetail };

import { createAppSlice } from '../../../redux/createAppSlice';
import { fetchMoviesByKeyword, fetchRandomMovies, MovieData } from 'fetch-movie-sdk';
import { PayloadAction } from '@reduxjs/toolkit';

export interface HomeSliceState {
  movieData: MovieData[];
  searchResults: MovieData[];
  fetchLoading: boolean;
  searchKeyword: string
}

const initialState: HomeSliceState = {
  movieData: [],
  searchResults: [],
  fetchLoading: true,
  searchKeyword: '',
};

export const homeSlice = createAppSlice({
  name: 'home',
  initialState,
  reducers: create => ({
    fetchMovieData: create.asyncThunk(
      async () => {
        const response = await fetchRandomMovies();
        return response.data;
      },
      {
        pending: state => {
          state.fetchLoading = true;
        },
        fulfilled: (state, action) => {
          state.fetchLoading = false;
          state.movieData = action.payload.description;
        },
        rejected: state => {
          state.fetchLoading = false;
        },
      },
    ),
    fetchSearchResult: create.asyncThunk(
      async (keyword: string) => {
        const response = await fetchMoviesByKeyword(keyword);
        return response.data;
      },
      {
        pending: state => {
          state.fetchLoading = true;
        },
        fulfilled: (state, action) => {
          state.fetchLoading = false;
          state.searchResults = action.payload.description;
        },
        rejected: state => {
          state.fetchLoading = false;
        },
      },
    ),
    handleChangeKeyword: create.reducer((state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
      state.searchResults = [];
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectMovieData: state => state.movieData,
    selectSearchResults: state => state.searchResults,
    selectFetchLoading: state => state.fetchLoading,
    selectSearchKeyword: state => state.searchKeyword,
  },
});

export const {
  fetchMovieData,
  fetchSearchResult,
  handleChangeKeyword,
} =
  homeSlice.actions;

export const {
  selectMovieData,
  selectFetchLoading,
  selectSearchResults,
  selectSearchKeyword,
} = homeSlice.selectors;

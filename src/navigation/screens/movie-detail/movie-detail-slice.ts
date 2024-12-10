import { createAppSlice } from '../../../redux/createAppSlice';
import { MovieDetail } from 'fetch-movie-sdk';

export interface MovieDetailSliceState {
  movieDetail: MovieDetail | null;
  fetchLoading: boolean;
}

const initialState: MovieDetailSliceState = {
  movieDetail: null,
  fetchLoading: true,
};

export const movieDetailSlice = createAppSlice({
  name: 'movie-detail',
  initialState,
  reducers: create => ({
    fetchData: create.asyncThunk(
      async (id: string) => {
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);

        return await response.json();
      },
      {
        pending: state => {
          state.fetchLoading = true;
        },
        fulfilled: (state, action) => {
          state.fetchLoading = false;
          state.movieDetail = action.payload.short;
        },
        rejected: state => {
          // state.status = 'failed';
          state.fetchLoading = false;
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectMovieDetail: state => state.movieDetail,
    selectFetchLoading: state => state.fetchLoading,
  },
});

export const { fetchData } =
  movieDetailSlice.actions;

export const { selectMovieDetail, selectFetchLoading } = movieDetailSlice.selectors;

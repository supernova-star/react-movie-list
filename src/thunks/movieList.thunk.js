import { createAsyncThunk } from "@reduxjs/toolkit";
import { MOCK_DATA } from "../mock";
import { GET_MOVIE_LIST } from "./movieList.thunk.const";
import { setMovieList } from "../reducers/movieList.slice";

export const getMovieList = createAsyncThunk(
    GET_MOVIE_LIST,
  (payload, { dispatch }) => {
      dispatch(setMovieList(MOCK_DATA))
  },
);

import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_APP_STATE } from "../redux/state";

const MovieSlice = createSlice({
    name: "MovieSlice",
    initialState: DEFAULT_APP_STATE,
    reducers: {
        setMovieList: (state, action) => {
            state.movieList = action.payload;
        },
        setSelectedMovie: (state, action) => {
            const selectedMovie = action.payload;
            const newList = state.movieList.map((movie, cartIndex) =>
                movie.id === selectedMovie.id
                ? {
                    ...movie,
                    focused: true,
                    }
                : {
                    ...movie,
                    focused: false,
                },
            );
            state.movieList = newList;
            state.selectedMovie = selectedMovie;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        collapseContainer: (state, action) => {
            state.collapsed = true;
        }
    },
});

export const { setMovieList, setSelectedMovie, setSearchQuery, collapseContainer } = MovieSlice.actions;

export default MovieSlice.reducer;

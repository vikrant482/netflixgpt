import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies : null,
        upComingMovies : null,
        topRatedMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addPopularMovies, addUpComingMovies,addTopRatedMovies} = moviesSlices.actions;
export default moviesSlices.reducer;

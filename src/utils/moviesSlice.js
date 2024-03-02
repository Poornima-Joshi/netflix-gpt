import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        topTrendingMovies:null,
        upComingMovies:null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addTopTrendingMovies : (state,action) =>{
            state.topTrendingMovies = action.payload;
        },
        addUpComingMovies : (state,action) =>{
            state.upComingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
    },

});
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addTopTrendingMovies,addUpComingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
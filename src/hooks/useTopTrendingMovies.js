import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { addTopTrendingMovies } from "../utils/moviesSlice";

const useTopTrendingMovie = () =>{
    const dispatch = useDispatch();

    const getTopTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS);
        const json = await data?.json();
        dispatch(addTopTrendingMovies(json?.results));
    };

    useEffect(()=>{
        getTopTrendingMovies();
    },[]);
}
export default useTopTrendingMovie;
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addTopTrendingMovies } from "../utils/moviesSlice";

const useTopTrendingMovie = () =>{
    const dispatch = useDispatch();

    const topTrendingMovies = useSelector((store) => store?.movies?.topTrendingMovies);

    const getTopTrendingMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1',API_OPTIONS);
        const json = await data?.json();
        dispatch(addTopTrendingMovies(json?.results));
        }catch(error){
            console.error('Error fetching TopTrending movies:', error);
        }
    };

    useEffect(()=>{
     !topTrendingMovies && getTopTrendingMovies();
    },[]);
}
export default useTopTrendingMovie;
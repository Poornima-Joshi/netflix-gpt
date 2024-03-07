import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

    const getTopRatedMovies = async () => {
       try{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
        const json = await data?.json();
        dispatch(addTopRatedMovies(json?.results));
       }catch(error){
        console.error('Error fetching TopRated movies:', error);
    }
    };

    useEffect(()=>{
     !topRatedMovies && getTopRatedMovies();
    },[]);
}
export default useTopRatedMovie;
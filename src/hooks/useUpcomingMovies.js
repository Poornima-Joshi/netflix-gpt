import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovie = () =>{
    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json = await data?.json();
        dispatch(addUpComingMovies(json?.results));
    };

    useEffect(()=>{
        getUpComingMovies();
    },[]);
}
export default  useUpComingMovie;
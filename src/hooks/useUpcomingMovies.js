import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovie = () =>{
    const dispatch = useDispatch();

    const upComingMovies = useSelector((store) => store?.movies?.upComingMovies);


    const getUpComingMovies = async () => {
        try{
          const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json = await data?.json();
        dispatch(addUpComingMovies(json?.results));
        }catch(error){
          console.error('Error fetching Upcoming movies:', error);
      }
    };

    useEffect(()=>{
      !upComingMovies && getUpComingMovies();
    },[]);
}
export default  useUpComingMovie;
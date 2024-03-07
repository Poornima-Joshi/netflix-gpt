import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addTvShows } from "../utils/moviesSlice";

const useTvShow = () =>{
    const dispatch = useDispatch();

    const tvShow = useSelector((store) => store?.movies?.tvShow);

    const getTvShows = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',API_OPTIONS);
        const json = await data?.json();
        dispatch(addTvShows(json?.results));
        }catch(error){
            console.error('Error fetching TopTrending movies:', error);
        }
    };

    useEffect(()=>{
     !tvShow && getTvShows();
    },[]);
}
export default useTvShow;
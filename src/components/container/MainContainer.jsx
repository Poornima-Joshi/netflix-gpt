import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import VideoBackground from "../layout/VideoBackground";
import VideoTitle from "../layout/VideoTitle";
import MainContainerShimmer from "../layout/MainContainerShimmer";

const movieNum = Math.floor(Math.random()*20);
const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies);
    
   if(!movies){
    return <MainContainerShimmer/>
   };
   
   
   const mainMovie = movies[movieNum];
   const {original_title,overview,id} = mainMovie;

  return (
    <Grid sx={{position:"relative"}}>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </Grid>
  )
}

export default MainContainer

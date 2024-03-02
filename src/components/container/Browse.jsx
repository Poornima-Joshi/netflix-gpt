import { Grid } from "@mui/material";
import NetFlixHeader from "./NetFlixHeader";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../../hooks/usePopularMovie";
import useTopRatedMovie from "../../hooks/useTopRatedMovies";
import useTopTrendingMovie from "../../hooks/useTopTrendingMovies";
import useUpComingMovie from "../../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useTopTrendingMovie();
  useUpComingMovie();

  return (
    <Grid sx={{position:"relative",bgcolor:"#000"}} pb={3}>
      
      <NetFlixHeader />  {/*position fixed*/}
      <MainContainer/> 
       {/*position absolute*/}
      <SecondaryContainer/>
     
    </Grid>
  );
};
export default Browse;

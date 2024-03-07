import { Grid } from "@mui/material";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovie from "../../hooks/usePopularMovie";
import useTopRatedMovie from "../../hooks/useTopRatedMovies";
import useTopTrendingMovie from "../../hooks/useTopTrendingMovies";
import useUpComingMovie from "../../hooks/useUpcomingMovies";
import useTvShow from "../../hooks/useTvShow";


const BrowseMain = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useTopTrendingMovie();
  useUpComingMovie();
  useTvShow();
  return (
    <Grid>
      <MainContainer/>
      <SecondaryContainer/>
    </Grid>
  )
}

export default BrowseMain;

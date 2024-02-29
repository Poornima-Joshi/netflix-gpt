import { Grid } from "@mui/material";
import NetFlixHeader from "./NetFlixHeader";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <Grid>
      <NetFlixHeader />
      {
        /*
        Maincontainer
         - videoBackground
         - videoTitle
        secondaryContainer
         - MovieList * n
            - cards * n 
        */ 
      }
    </Grid>
  );
};
export default Browse;

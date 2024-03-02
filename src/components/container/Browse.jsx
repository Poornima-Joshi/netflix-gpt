import { Grid } from "@mui/material";
import NetFlixHeader from "./NetFlixHeader";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <Grid sx={{position:"relative",bgcolor:"grey"}}>
      <NetFlixHeader />  {/*position fixed*/}
      <MainContainer/>   {/*position absolute*/}
      <SecondaryContainer/>
    </Grid>
  );
};
export default Browse;

import { Grid } from "@mui/material";
import NetFlixHeader from "./NetFlixHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import MainContainerShimmer from "../layout/MainContainerShimmer";

const Browse = () => {
  const movies = useSelector(store=>store?.movies);
  const isLoading = !movies;
  

  return (
    <Grid >
      <NetFlixHeader /> 
      <Grid sx={{position:"relative",bgcolor:"#000"}}>
      {isLoading ? <MainContainerShimmer /> : <Outlet />}
     
      </Grid>
      <Footer/>
    </Grid>
  );
};
export default Browse;

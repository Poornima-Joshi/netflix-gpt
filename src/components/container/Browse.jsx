import { Grid } from "@mui/material";
import NetFlixHeader from "./NetFlixHeader";
import { Outlet } from "react-router-dom";

const Browse = () => {
  

  return (
    <Grid >
      <NetFlixHeader /> 
      <Grid sx={{position:"relative",bgcolor:"#000"}}>
      <Outlet/>
      </Grid>
    </Grid>
  );
};
export default Browse;

import { Box, Grid } from "@mui/material";
import Header from "./Header";
import MainCaption from "../layout/MainCaption";
import NetFlixTv from "../layout/NetFlixTv";
import NetFlixDiwali from "../layout/NetFlixDiwali";
import NetFlixBooks from "../layout/NetFlixBooks";
import NetFlixChild from "../layout/NetFlixChild";
import NetflixAccordion from "../layout/NetflixAccordion";


const Main = () => {
  return (
    <>
     <Grid className="netflix-banner border-bottom">
      <Grid className="netflix-bg">
        <Grid container item xs={12} px={2} lg={10} mx="auto">
          <Header/>
          <MainCaption/>
        </Grid>
      </Grid>
     </Grid>
     <NetFlixTv/>
     <NetFlixBooks/>
     <NetFlixDiwali/>
     <NetFlixChild/>
     <NetflixAccordion/>
     
    </>
  )
}

export default Main

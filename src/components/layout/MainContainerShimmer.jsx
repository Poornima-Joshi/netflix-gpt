import { CircularProgress, Grid } from "@mui/material";


const MainContainerShimmer = () => {
  return (
    <>
      <Grid
        sx={{
          maxWidth: "100%",
          width: "100%",
          height:"100vh",
          aspectRatio: 16 / 9,
          bgcolor: "black",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >

        <Grid>
        <CircularProgress size={50} sx={{color:"red"}}/>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContainerShimmer;

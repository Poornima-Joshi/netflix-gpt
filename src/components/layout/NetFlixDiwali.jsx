import { Grid, Typography } from "@mui/material";
import { NETFLIX_DIWALI_URL, DEWALI_VIDEO_URL } from "../../utils/constants";

const NetFlixDiwali = () => {
  return (
    <Grid sx={{ background: "#000" }} className="border-bottom">
      <Grid
        container
        item
        xs={12}
        lg={10}
        mx="auto"
        px={2}
        py={5}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            color="#fff"
            px={2}
            sx={{
              
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: { xs: "700", md: "900" },
            }}
          >
            Watch everywhere
          </Typography>
          <Typography
            variant="body1"
            my={2}
            px={2}
            color="#fff"
            sx={{
              
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "1.125rem", lg: "1.5rem" },
              fontWeight: "400",
            }}
          >
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <figure className="netflix-tv-figure">
            <video className="netflix-diwali-video" autoPlay loop muted>
              <source src={DEWALI_VIDEO_URL} type="video/mp4" />
            </video>
            <img
              src={NETFLIX_DIWALI_URL}
              width={"100%"}
              className="netflix-tv-image"
            />
          </figure>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NetFlixDiwali;

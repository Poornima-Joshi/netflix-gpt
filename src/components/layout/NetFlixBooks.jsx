import { Grid, Typography } from "@mui/material";
import { NETFLIX_MOBILE_URL } from "../../utils/constants";

const NetFlixBooks = () => {
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
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <img
            src={NETFLIX_MOBILE_URL}
            width={"100%"}
            className="netflix-tv-image"
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h2"
            color="#fff"
            sx={{
              
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: { xs: "700", md: "900" },
            }}
          >
            Download your shows to watch offline
          </Typography>
          <Typography
            variant="body1"
            my={2}
            color="#fff"
            sx={{
              
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "1.125rem", lg: "1.5rem" },
              fontWeight: "400",
            }}
          >
            Save your favourites easily and always have something to watch.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NetFlixBooks;

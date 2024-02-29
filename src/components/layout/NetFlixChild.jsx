import { Grid, Typography } from "@mui/material";
import { CHILD_URL } from "../../utils/constants";

const NetFlixChild = () => {
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
            src={CHILD_URL}
            width={"100%"}
            className="netflix-tv-image"
            alt="netflix-child"
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
            Create profiles for kids
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
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NetFlixChild;

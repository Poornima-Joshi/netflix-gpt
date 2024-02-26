import { Box,Typography } from "@mui/material";

const MainCaption = () => {
  return (
    <>
      <Box className="mainCaption" component="div">
        <Box component="div">
          <Typography
            variant="h1"
            color="#fff"
            sx={{ fontWeight: "bolder", textAlign: "center",
            fontSize: { xs: "2rem",  md:"3rem"},
            fontWeight:{xs:"700",  md:"900"}
            }}
          >
            Unlimited movies,TV shows and more
          </Typography>
          <Typography
            variant="body1"
            my={2}
            color="#fff"
            sx={{
              fontWeight: "bolder",
              textAlign: "center",
              fontSize: { xs: "1.125rem", lg: "1.5rem"},
              fontWeight:"400",
            }}
          >
            Watch anywhere.Cancel anytime.
          </Typography>
          <Typography
            variant="body1"
            color="#fff"
            sx={{
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: { xs: "1.125rem", lg: "1.5rem"},
                fontWeight:"400",
              }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MainCaption;

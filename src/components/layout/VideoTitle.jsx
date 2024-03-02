import { Button, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

const VideoTitle = ({ title, overview }) => {
  return (
    <Grid
      px={3.7}
      sx={{
        position: "absolute",
        zIndex: "2",
        color: "#fff",
        top: { md: "53%", xs: "53%", sm: "60%" },
        display: { xs: "flex" },
        flexDirection: { xs: "column" },
        alignItems: { xs: "center", md: "start" },
        width: "100%",
      }}
    >
      <Grid>
        <Typography
          variant="h1"
          py={0.2}
          sx={{
            wordSpacing: "-5px",
            fontSize: { xs: "1.7rem", sm: "2rem", md: "2.7rem" },
            fontWeight: "900",
            textShadow: "1px 1px 1px black",
          }}
        >
          {title}
        </Typography>
        <Typography
          className="video-para"
          variant="body2"
          sx={{
            maxWidth: "600px",
            textShadow: "1px 1px 1px black",
            fontWeight: "400",
            display: { md: "flex", xs: "none", sm: "none" },
          }}
        >
          {overview}
        </Typography>
      </Grid>
      <Grid sx={{ marginTop:{ md: "2rem", sm: "1rem", xs: "0.6rem" } }}>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          // size={{md:"large",sm:"medium",xs:"small"}}

          sx={{
            background: "#fff",
            color: "#000",
            "&:hover": { background: "#fff" },
            fontSize: {
              md: "large",
              sm: "medium",
              xs: "small",
            },
            paddingInline:{
              xs:"0.5rem"
            },
            paddingBlock:{
              xs:"0.3rem"
            }
          }}
        >
          Play
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: "10px",
            background: "#616161",
            "&:hover": { background: "#424242" },
            fontSize: {
              md: "large",
              sm: "medium",
              xs: "small",
            },
            paddingInline:{
              xs:"0.5rem"
            },
            paddingBlock:{
              xs:"0.3rem"
            }
          }}
          startIcon={<InfoIcon />}
          size="large"
        >
          More Info
        </Button>
      </Grid>
    </Grid>
  );
};

export default VideoTitle;

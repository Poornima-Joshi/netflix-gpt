import { Button, Grid } from "@mui/material";
import {useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useState } from "react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';


const VideoBackground = ({ movieId }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const trailerVideo = useSelector(store=> store?.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

    

  return (
    <Grid sx={{ position: "relative", width: "100%" }}>
      <Grid className="video-trailer-bg"></Grid>
      <iframe
        className="video-trailer"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
       <Button
        variant="contained"
        onClick={toggleMute}
        sx={{
          position: 'absolute',
          top: '69%',
          right: '3%',
          zIndex: '999',
          bgcolor:"#fff",
          color:"#000",
          "&:hover":{bgcolor:"#fff"},
          borderRadius:"50%",
          padding: {md:"9px 9px",sm:"5px 6px",xs:"2px 2px"},
          minWidth: {md:"20px",xs:"10px"},
          minHeight: {md:"43px",xs:"23px"},
          boxShadow:"1px 1px 1px gray"
        }}
      >
        {isMuted ? <VolumeOffIcon/> :  <VolumeMuteIcon/>}
      </Button>
      
      
    </Grid>
  );
};


export default VideoBackground;

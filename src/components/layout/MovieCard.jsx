import { Grid } from "@mui/material"
import { IMG_CDN_URL } from "../../utils/constants"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MovieCard = ({posterPath,title}) => {
  return (
    <Card sx={{ maxWidth:{md:"140px",sm:"120px",xs:"100px"},transition:"1s","&:hover":{transform: "scale(0.95)",transition:"1s"}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{width:{md:"140px",sm:"120px",xs:"100px"}}}
          // height="140"
          image={IMG_CDN_URL+posterPath}
          alt={title}
        />
      </CardActionArea>
    </Card>
    // <Grid sx={{width:{md:"130px"}}}>
    //   <img alt={title} src={IMG_CDN_URL+posterPath} style={{width:"130px"}}/>
    // </Grid>
  )
}

export default MovieCard

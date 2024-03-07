import { IMG_CDN_URL } from "../../utils/constants"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const MovieCard = ({posterPath,title}) => {
  if(!posterPath) return null;
  return (
    <Card sx={{ maxWidth:{md:"140px",sm:"120px",xs:"70px"},transition:"1s","&:hover":{transform: "scale(0.95)",transition:"1s"}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{width:{md:"140px",sm:"120px",xs:"70px"}}}
          image={IMG_CDN_URL+posterPath}
          alt={title}
        />
      </CardActionArea>
    </Card>
  )
}

export default MovieCard

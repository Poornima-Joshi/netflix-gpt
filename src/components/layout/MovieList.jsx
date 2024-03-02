import { Button, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MovieList = ({ rowID,title, movies }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider"+ rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider"+ rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <Grid px={3} pb={4}>
      <Typography
        variant="h5"
        color="#fff"
        mb={1}
        sx={{ textShadow: "1px 1px 1px black", fontWeight: "700" }}
      >
        {title}
      </Typography>
      <Grid style={{ position: "relative" }} className="movie-list">
        <Grid display={"flex"} className="movie-scroll" id={"slider"+ rowID}>
          <Grid display={"flex"} gap={2} className="movie-slider">
            {movies?.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                title={movie?.title}
              />
            ))}
          </Grid>
        </Grid>
        <ArrowBackIosNewIcon
          className="caro-icon"
          sx={{ left: "1%" }}
          onClick={slideLeft}
        />
        <ArrowForwardIosIcon
          className="caro-icon"
          sx={{ right: "1%" }}
          onClick={slideRight}
        />
      </Grid>
    </Grid>
  );
};

export default MovieList;

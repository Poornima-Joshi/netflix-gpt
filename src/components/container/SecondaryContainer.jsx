import { Grid } from "@mui/material";
import MovieList from "../layout/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <Grid sx={{ bgcolor: "black" }}>
      <Grid
        sx={{
          zIndex: "999",
          position: { lg: "relative", xs: "static" },
          mt: { lg: "-8rem" },
          pt: { xs: "2rem", md: "0" },
        }}
      >
        <MovieList rowID={1} title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList rowID={2} title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList rowID={3} title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList rowID={4} title={"Top Trending Movies"} movies={movies?.topTrendingMovies} />
        <MovieList rowID={5} title={"UpComing Movies"} movies={movies?.upComingMovies} />
        
      </Grid>
    </Grid>
  );
};

export default SecondaryContainer;

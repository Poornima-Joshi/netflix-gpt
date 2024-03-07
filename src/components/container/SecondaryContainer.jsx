import { Grid } from "@mui/material";
import MovieList from "../layout/MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if(!movies){
    return null
  };

  return (
    <Grid sx={{ bgcolor: "black" }}>
      <Grid
        sx={{
          zIndex: "999",
          position: { lg: "relative", xs: "static" },
          mt: { lg: "-8rem",xs:"-3rem" },
          pt: { xs: "2rem", md: "0" },
        }}
      >
        {movies?.nowPlayingMovies?.length > 0 && (
          <MovieList
            rowID={1}
            title="Now Playing"
            movies={movies.nowPlayingMovies}
          />
        )}
        {movies?.topRatedMovies?.length > 0 && (
          <MovieList
            rowID={2}
            title="Top Rated Movies"
            movies={movies.topRatedMovies}
          />
        )}
        {movies?.popularMovies?.length > 0 && (
          <MovieList
            rowID={3}
            title="Popular Movies"
            movies={movies.popularMovies}
          />
        )}
        {movies?.tvShow?.length > 0 && (
          <MovieList
            rowID={6}
            title="Tv shows"
            movies={movies.tvShow}
          />
        )}
        {movies?.topTrendingMovies?.length > 0 && (
          <MovieList
            rowID={4}
            title="Top Trending Movies"
            movies={movies.topTrendingMovies}
          />
        )}
        {movies?.upComingMovies?.length > 0 && (
          <MovieList
            rowID={5}
            title="Upcoming Movies"
            movies={movies.upComingMovies}
          />
        )}
        
        
      </Grid>
    </Grid>
  );
};

export default SecondaryContainer;

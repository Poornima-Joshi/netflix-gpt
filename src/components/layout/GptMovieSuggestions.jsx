import { Grid } from "@mui/material";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if(!movieNames) return null;

  return (
    <Grid sx={{ bgcolor: "#1a237e"}}>
      <Grid
        container
        item
        xs={12}
        md={10}
        sx={{ bgcolor: "#1a237e",borderRadius:"5px"}}
        mx="auto"
        className="gpt-movies"
      >
        {movieNames?.map((movieName, index) => (
          <MovieList
            rowID={movieName}
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default GptMovieSuggestions;

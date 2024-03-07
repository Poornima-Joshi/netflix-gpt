import { Grid } from "@mui/material";
import GptSearchBar from "../layout/GptSearchBar";
import GptMovieSuggestions from "../layout/GptMovieSuggestions";

const GptSearch = () => {
  return (
    <Grid
      pt={4}
      sx={{
        backgroundColor: "#000", // Start with black
        backgroundImage:
          "linear-gradient(315deg, rgba(0,0,0,0.35) 0%, #2234ae 40%, rgba(0,0,0,0.35) 100%)",
          height:"100vh"
      }}
    >
      <GptSearchBar />
      <GptMovieSuggestions />
    </Grid>
  );
};

export default GptSearch;

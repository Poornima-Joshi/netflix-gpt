import {Button,FormControl,Grid,MenuItem,Select,TextField,Typography} from "@mui/material";
import { Stack } from "@mui/system";
import lang from "../../utils/languageConstants";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../utils/configSlice";
import { useRef } from "react";
import openai from "../../utils/openaikey";
import { addGptMovieResult } from "../../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  //search movie in TMDB
  const searchMovieTMDM = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    if (searchText.current.value.trim().length === 0) {
      return alert("Please enter a search query before clicking search.");
    }
    //make an api call to gpt api and get movie Results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi mil gaya";

    const gptResults = await openai?.chat?.completions?.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults);
    if (!gptResults?.choices) {
      return alert("this movie is not avaliable");
    }
    const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");
    //for each movie i will search TMDB api
    const promiseArray = gptMovies?.map((movie)=> searchMovieTMDM(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };

  return (
    <Grid
      sx={{ mt: { sm: "6rem", xs: "3.5rem" }}}
      container
      item
      xs={12}
      md={10}
      p={3}
      mx="auto"
      
    >
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        width="100%"
        mb={1}
        sx={{
          fontSize: { sm: "1.7rem", md: "2.5rem", xs: "1.3rem" },
          fontWeight: { md: 900, sm: 800, xs: 800 },
          
        }}
      >
        Let AI be your Movie Guru!
      </Typography>
      <Typography
        variant="body1"
        color="gray"
        textAlign="center"
        width="100%"
        mb={3}
        sx={{
          fontSize: { xs: "0.9rem", md: "1.2rem" },
        }}
      >
        Discover Family-Friendly Flicks for a Perfect Movie Night
      </Typography>

      <form style={{ width: "100%"}} >
        <Stack direction="row" spacing={1} >
          <TextField
            inputRef={searchText}
            label="search"
            focused
            fullWidth
            placeholder={lang[langKey].gptSearchPlaceholder}
            sx={{
              "& .MuiInputBase-input": {
                color: "#fff",
              },
            }}
          />

          <FormControl focused>
            <Select
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleLangChange}
              value={langKey}
              sx={{
                "& .MuiSelect-select": {
                  color: "#fff",
                },
              }}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <MenuItem key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              background: "#E50914",
              "&:hover": { background: "#E50914" },
            }}
            type="button"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default GptSearchBar;

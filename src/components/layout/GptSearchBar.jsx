import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {Stack } from "@mui/system";
import lang from "../../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../utils/configSlice";

const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang);
  const dispatch = useDispatch();

  const handleLangChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <Grid
      sx={{ mt: { sm: "6rem", xs: "3.5rem" } }}
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

      <form style={{ width: "100%" }}>
        <Stack direction="row" spacing={1}>
          <TextField
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

          <FormControl  focused>
            <Select inputProps={{ "aria-label": "Without label" }}  
             onChange={handleLangChange}
             value={langKey}
            sx={{
              "& .MuiSelect-select": {
                color: "#fff",
              },
            }}>
              {
                SUPPORTED_LANGUAGES.map((lang)=>(
                  <MenuItem key={lang.identifier} value={lang.identifier}>{lang.name}</MenuItem>
             
                ))
              }
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              background: "#E50914",
              "&:hover": { background: "#E50914" },
            }}
            type="button"
          >
            {lang[langKey].search}
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default GptSearchBar;

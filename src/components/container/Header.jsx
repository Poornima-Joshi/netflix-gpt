import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link} from "react-router-dom";

const Header = () => {
  

  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "transparent", boxShadow: "none", position:"static", mt:"0.5rem"}}
      
    >
      <Toolbar sx={{px:0}}>
        <Typography
          variant="h4"
          color="#ec0707"
          sx={{
            wordSpacing: "-5px",
            fontSize: { xs: "1.5rem", md: "1.7rem" },
            fontWeight: "bold",
          }}
        >
          NETFLIX GPT
        </Typography>
        <Typography flexGrow={1} mx={1}  color="#ec0707">
          <AdbIcon
           sx={{fontSize: { xs: "1.5rem", md: "1.7rem"}}}
            
          />
        </Typography>
         
         <Grid>
         
          <Button 
          component= {Link}
          to="/login"
           variant="contained" color="error" size="small">Sign In</Button>
          
        </Grid>
        
         
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import {
    AppBar,
    Box,
    Button,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { Link } from "react-router-dom";
  
  
  const LoginHeader = () => {
    return (
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none", position:"static", mt:"0.5rem"}}
        
      >
        <Toolbar sx={{px:0}}>
          <Link to="/" style={{textDecoration:"none"}}>
            <Stack direction="row" alignItems={"center"}>
            <Typography
            variant="h4"
            color="#ec0707"
            sx={{
              wordSpacing: "-5px",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontWeight: "bold",
            }}
          >
            NETFLIX GPT
          </Typography>
            <Typography flexGrow={1} mx={1.} mt={1} color="#ec0707">
            <ImportantDevicesIcon
             sx={{fontSize: { xs: "1.5rem", sm: "2rem"}}}
              
            />
          </Typography>
            </Stack>
          
          </Link>
          
          {/* <Box>
            <Button variant="contained" color="error" size="small">Sign In</Button>
          </Box> */}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default LoginHeader;
  
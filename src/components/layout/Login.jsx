import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import LoginHeader from "../container/LoginHeader";
import { useState,useRef} from "react";
import { checkValidData } from "../../utils/validate";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    
    console.log(email);
    console.log(password);
    checkValidData(name.current.value,email.current.value,password.current.value);
  }


  return (
    <>
      <Grid className="netflix-banner">
        <Grid className="netflix-bg">
          <Grid container item xs={12} px={2} lg={10} mx="auto">
            <LoginHeader />
            <Grid container justifyContent={"center"} mt="5rem" mb={"1rem"}>
              <Grid item lg={4.2}  px={6} py={7} className="login-form">
                <Typography variant="h4" color="#fff" mb={2}>
                {isSignInForm ? "Sign In" : "Sign Up"}
                </Typography>
                <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                  {!isSignInForm && <Typography mb={2}>
                    <TextField
                      id="name"
                      label="Name"
                      fullWidth
                      variant="outlined"
                      inputRef={name}
                    />
                  </Typography>}
                  
                  <Typography mb={2}>
                    <TextField
                      id="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      inputRef={email}
                    />
                  </Typography>
                  <Typography mb={2}>
                    <TextField
                      id="password"
                      label="Password"
                      fullWidth
                      variant="outlined"
                      inputRef={password}
                    />
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "red",
                      mt: "0.6rem",
                      mb: "1.5rem",
                      "&:hover": { background: "#E50914" },
                    }}
                    fullWidth
                    size="large"
                    onClick={handleButtonClick}
                  >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </Button>
                  <Typography variant="p" color="gray">
                    {isSignInForm
                      ? "New to NetflixGPT?"
                      : "Already have an Account?"}
                    <Typography
                      variant="span"
                      color="white"
                      ml={1}
                      sx={{
                        "&:hover": { textDecoration: "underline" },
                        cursor: "pointer",
                      }}
                      onClick={toggleSignInForm}
                    >
                      {isSignInForm ? "Sign up now." : "Sign in now."}
                    </Typography>
                  </Typography>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;

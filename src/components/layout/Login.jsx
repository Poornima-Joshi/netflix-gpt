import { Button, Grid,Typography} from "@mui/material";
import LoginHeader from "../container/LoginHeader";
import { useState, useRef, useEffect } from "react";
import { checkSignInData,checkSignUpData } from "../../utils/validate";
import { MyStyledTextField } from "../../utils/customStyled";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
  }, [errorMessage]);

  const handleButtonClick = () => {
    console.log(name);
    console.log(password.current.value);
    console.log(email.current.value);
    const message = isSignInForm
      ? checkSignInData(email.current.value, password.current.value)
      : checkSignUpData(
          name.current.value,
          email.current.value,
          password.current.value
        );

    setErrorMessage({
      nameError: message
        ? message.find((item) => item.field === "name")?.message || ""
        : "",
      emailError: message
        ? message.find((item) => item.field === "email")?.message || ""
        : "",
      passwordError: message
        ? message.find((item) => item.field === "password")?.message || ""
        : "",
    });

    
  };

  // const MyStyledTextField = {
  //   '& .MuiInputBase-input': {
  //   color: '#fff',
  //   padding: '13.5px 14px',
  //   background: 'rgb(158 143 143 / 47%)',
  //   borderRadius: '4px',
  //   '&:focus': {
  //     background:"#333", // Focus par background color
  //   },
  //   },
  //   '& .MuiInputLabel-root': {
  //     color: '#fff',
  //   },
  //   '& .MuiFormHelperText-root': {
  //     color: 'red',
  //   },
  // };
  
  return (
    <>
      <Grid className="netflix-banner">
        <Grid className="netflix-bg">
          <Grid container item xs={12} px={2} lg={10} mx="auto">
            <LoginHeader />
            <Grid container justifyContent={"center"} mt="5rem" mb={"1rem"}>
              <Grid item lg={4.2} md={5.2} sm={6.2} xs={12} px={6} py={7} className="login-form">
                <Typography variant="h4" color="#fff" mb={2}>
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                  {!isSignInForm && (
                    <Grid mb={2}>
                      <MyStyledTextField
                        type="text"
                        label="Name"
                        fullWidth
                        variant="outlined"
                        inputRef={name}
                        helperText={errorMessage.nameError}
                       
                      />
                    </Grid>
                  )}

                  <Grid mb={2}>
                    <MyStyledTextField
                      type="text"
                      
                      label="Email"
                      fullWidth
                      variant="outlined"
                      inputRef={email}
                      helperText={errorMessage.emailError}
                      
                    />
                  </Grid>
                  <Grid mb={2}>
                    <MyStyledTextField
                      type="password"
                      label="Password"
                      fullWidth
                      variant="outlined"
                      inputRef={password}
                      helperText={errorMessage.passwordError}
                      
                    />
                  </Grid>

                  <Button
                    type="button"
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

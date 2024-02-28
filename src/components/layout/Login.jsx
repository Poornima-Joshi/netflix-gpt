import { Button, Grid, Typography } from "@mui/material";
import LoginHeader from "../container/LoginHeader";
import { useState, useRef, useEffect } from "react";
import { checkSignInData, checkSignUpData } from "../../utils/validate";
import { MyStyledTextField } from "../../utils/customStyled";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [firebaseErrorMsg, setFireBaseErrorMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setFireBaseErrorMsg("");
  };

  useEffect(() => {}, [errorMessage]);

  const handleButtonClick = () => {
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
    if (message) return;

    //sign-In/sign-Up logic
    if (!isSignInForm) {
      // sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setFireBaseErrorMsg(error.message);
            });
        })
        .catch((error) => {
          let errorMessage;
          switch (error.code) {
            case "auth/email-already-in-use":
              errorMessage = "The email address is already in use.";
              break;
            default:
              errorMessage = "An error occurred while signing up.";
          }
          setFireBaseErrorMsg(errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          let errorMessage;
          switch (error.code) {
            case "auth/user-not-found":
              errorMessage = "No user found with this email address.";
              break;
            case "auth/wrong-password":
              errorMessage = "The password is incorrect.";
              break;
            // Add more cases to handle other error codes as needed
            default:
              errorMessage = "An error occurred while signing in.";
          }
          setFireBaseErrorMsg(errorMessage);
        });
    }
  };

  return (
    <>
      <Grid className="netflix-banner">
        <Grid className="netflix-bg">
          <Grid container item xs={12} px={2} lg={10} mx="auto">
            <LoginHeader />
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ height: "80vh" }}
              mb={"1rem"}
            >
              <Grid
                item
                sx={{ maxWidth: "400px" }}
                px={6}
                py={7}
                className="login-form"
              >
                <Typography
                  variant="h4"
                  color="#fff"
                  mb={2}
                  sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                >
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
                  <Grid color="red">{firebaseErrorMsg}</Grid>

                  <Button
                    type="button"
                    variant="contained"
                    sx={{
                      background: "red",
                      mt: "0.6rem",
                      mb: "1.5rem",
                      "&:hover": { background: "#E50914" },
                      fontSize: { xs: "0.9rem", sm: "initial" },
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

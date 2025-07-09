import React from "react";
import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { usernameValidator } from "../utils/validator";

const Login = () => {
  const name = useInputValidation("");
  const Bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");

  const [isLogin, setIsLogin] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();
  };

  const signUpHandler = (e) => {
    e.preventDefault();
  };

  const toggleLogin = () => {
    name.clear();
    Bio.clear();
    username.clear();
    password.clear();
    setIsLogin(!isLogin);
  };
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                type="text"
                variant="outlined"
                label="username"
                value={username.value}
                onChange={username.changeHandler}
                fullWidth
                margin="normal"
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                value={password.value}
                onChange={password.changeHandler}
                type="password"
                fullWidth
                variant="outlined"
                label="password"
                margin="normal"
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{
                  marginTop: "1rem",
                }}
              >
                Login
              </Button>
              <Typography textAlign={"center"} marginTop={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                SignUp Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">SignUp</Typography>

            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
              <Avatar
                sx={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "contain",
                }}
                src={avatar.preview}
              />
              {avatar.error && (
                <Typography color="error" variant="caption">
                  {avatar.error}
                </Typography>
              )}
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  ":hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                  component: "label",
                }}
                component="label"
              >
                <CameraAltIcon />
                <VisuallyHiddenInput
                  type="file"
                  onChange={avatar.changeHandler}
                />
              </IconButton>
            </Stack>

            <form>
              <TextField
                required
                type="text"
                variant="outlined"
                label="Name"
                value={name.value}
                onChange={name.changeHandler}
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="text"
                variant="outlined"
                label="Bio"
                value={Bio.value}
                onChange={Bio.changeHandler}
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="text"
                value={username.value}
                onChange={username.changeHandler}
                variant="outlined"
                label="username"
                fullWidth
                margin="normal"
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                type="password"
                fullWidth
                variant="outlined"
                label="password"
                margin="normal"
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{
                  marginTop: "1rem",
                }}
              >
                SignUp
              </Button>
              <Typography textAlign={"center"} marginTop={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                marginTop={"1rem"}
                fullWidth
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
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
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="password"
                fullWidth
                variant="outlined"
                label="password"
                margin="normal"
              />
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
              <Button
                variant="text"
                marginTop={"1rem"}
                fullWidth
                onClick={toggleLogin}
              >
                SignUp Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">SignUp</Typography>
            <form>
              <TextField
                required
                type="text"
                variant="outlined"
                label="Name"
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="text"
                variant="outlined"
                label="username"
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="text"
                variant="outlined"
                label="username"
                fullWidth
                margin="normal"
              />
              <TextField
                required
                type="password"
                fullWidth
                variant="outlined"
                label="password"
                margin="normal"
              />
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

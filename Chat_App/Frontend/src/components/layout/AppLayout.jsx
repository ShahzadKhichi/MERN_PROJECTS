import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedCommponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <Grid
          container
          columnGap={"50px"}
          width={"100vw"}
          height={"calc(100vh - 4rem)"}
        >
          <Grid
            sm={4}
            md={3}
            sx={{
              display: { sm: "block" },
            }}
            height={"100%"}
            width={"30%"}
          >
            First
          </Grid>
          <Grid height={"100%"} width={"30%"} bgcolor="primary.main">
            <WrappedCommponent {...props} />
          </Grid>
          <Grid width={"30%"} height={"100%"}>
            third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;

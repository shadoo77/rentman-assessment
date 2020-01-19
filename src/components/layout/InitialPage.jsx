import React from "react";
// Material UI
import { Paper, Typography, Box } from "@material-ui/core/";

export default () => {
  return (
    <Box mt={3}>
      <Paper style={{ backgroundColor: "#faf7ff" }}>
        <Box display="flex" justifyContent="center" alignItems="center" m={1}>
          <Typography component="p" style={{ padding: 20, fontSize: 14 }}>
            Welcome to OMDB Search, search somthing in the bar above !
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

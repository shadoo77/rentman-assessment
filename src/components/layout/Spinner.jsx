import React from "react";
// Material UI
import { CircularProgress, Box } from "@material-ui/core/";

export default () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={3}>
      <CircularProgress />
    </Box>
  );
};

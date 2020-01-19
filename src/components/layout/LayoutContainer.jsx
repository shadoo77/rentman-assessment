import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  paperStyle: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(0)
    }
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.paperStyle}>{props.children}</div>
    </div>
  );
};

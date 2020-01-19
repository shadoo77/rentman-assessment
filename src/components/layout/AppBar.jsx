import React from "react";
import { withRouter } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    "&:hover": {
      color: "#000"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 320,
      "&:focus": {
        width: 400
      }
    }
  }
}));

export default withRouter(props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Replace spaces with + operator
    const searchQuery = value ? value.split(" ").join("+") : " ";
    if (!searchQuery || !searchQuery.length) {
      return;
    }
    props.history.push(`/search/${searchQuery}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            flexWrap="nowrap"
          >
            <Box flexGrow={1}>
              <Typography variant="h6" noWrap>
                OMDB Search
              </Typography>
            </Box>
            <Box>
              <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <div className={classes.search}>
                  <InputBase
                    onChange={e => handleChange(e)}
                    value={value}
                    placeholder="Search a movie here .."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div className={classes.searchIcon} onClick={handleSubmit}>
                    <SearchIcon style={{ fontSize: 29 }} />
                  </div>
                </div>
              </form>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
});

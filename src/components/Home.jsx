import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { apiURI } from "../services/config";
import { isEmpty } from "../services/utils";
import { RootContext } from "../store";
import { fetchListMovies } from "../store/actions/moviesList";
// Components
import CardItem from "./layout/CardItem";
import WithFetchWrapper from "./layout/WithFetchWrapper";
// Material UI
import { Grid, Box, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cellStyle: {
    color: theme.palette.text.secondary,
    transition: "all 0.5s ease"
  }
}));

export default props => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { searchQuery } = props.match.params;
  const { state, dispatch } = useContext(RootContext);
  const [details, setDetails] = useState({
    movieId: "",
    plot: "",
    actors: "",
    ratings: []
  });
  const [activeDetails, setActiveDetails] = useState("");

  useEffect(() => {
    searchQuery && fetchListMovies(dispatch, searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    searchQuery && fetchListMovies(dispatch, searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const deactiveDetails = () => {
    setActiveDetails("");
  };

  const handleActiveDetails = async movieId => {
    setActiveDetails(movieId);
    try {
      const result = await axios.get(`${apiURI}i=${movieId}`);
      if (!isEmpty(result.data)) {
        setDetails({
          ...details,
          movieId,
          plot: result.data.Plot,
          actors: result.data.Actors,
          ratings: result.data.Ratings
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const gridItems = () => {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {state.movies.data.map((movie, i) => (
            <Grid
              item
              xs={12}
              sm={activeDetails && activeDetails === movie.imdbID ? 12 : 6}
              className={classes.cellStyle}
              key={movie.imdbID}
              style={{
                order:
                  activeDetails &&
                  movie.order % 2 === 0 &&
                  isDesktop &&
                  activeDetails === movie.imdbID
                    ? `${movie.order - 2}`
                    : movie.order
              }}
            >
              <CardItem
                movie={movie}
                activeDetails={activeDetails}
                handleActiveDetails={handleActiveDetails}
                deactiveDetails={deactiveDetails}
                movieDetails={details}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <Box mt={3}>
      <WithFetchWrapper state={state.movies}>{gridItems()}</WithFetchWrapper>
    </Box>
  );
};

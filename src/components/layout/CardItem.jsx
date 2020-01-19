import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    minHeight: 300,
    transition: "all 0.5s ease"
  },
  contentContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 135,
    minWidth: 135
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between"
  },
  textSecondary: {
    fontSize: "0.8em",
    fontWeight: 800,
    marginTop: 9
  }
}));

export default props => {
  const classes = useStyles();
  const { imdbID, Poster, Title, Type, Year, order } = props.movie;
  const { movieDetails, activeDetails } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={Poster}
        title="Live from space album cover"
      />
      <div className={classes.contentContainer}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`Type : ${Type}`}
          </Typography>

          {/********** Here are the details (hidden by default) ******/}
          <div style={{ display: imdbID === activeDetails ? "block" : "none" }}>
            <Typography className={classes.textSecondary}>Plot :</Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 13 }}>
              {movieDetails.plot || ""}
            </Typography>

            <Typography className={classes.textSecondary}>Actors :</Typography>
            <Typography variant="body2" component="p" style={{ fontSize: 13 }}>
              {movieDetails.actors || ""}
            </Typography>

            <Typography className={classes.textSecondary}>Ratings :</Typography>
            {movieDetails.ratings && movieDetails.ratings.length
              ? movieDetails.ratings.map((rate, i) => (
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ fontSize: 13 }}
                    key={`rate${i}`}
                  >
                    {`- ${rate.Source} : ${rate.Value}`}
                  </Typography>
                ))
              : null}
          </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.cardActions}>
          <span style={{ color: "#c1c1c1" }}>{Year}</span>
          <Button
            variant="contained"
            size="small"
            color={
              activeDetails && imdbID === activeDetails
                ? "secondary"
                : "primary"
            }
            onClick={() =>
              activeDetails && imdbID === activeDetails
                ? props.deactiveDetails("")
                : props.handleActiveDetails(imdbID)
            }
          >
            {activeDetails && imdbID === activeDetails ? "Hide" : "Details"}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

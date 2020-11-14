import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  starGroup: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(2, 2, 0, 0),
    padding: theme.spacing(2),
  },
}));

export function FixStarRating({ review }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Typography component="h6">{`User ID: ${review.user_id}`}</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} container direction="column" spacing={2}>
              <Typography component="legend">General</Typography>
              <Typography component="legend">Price</Typography>
              <Typography component="legend">Distance</Typography>
              <Typography component="legend">Safety</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" spacing={2}>
              <Rating name="disabled" value={review.general} disabled />
              <Rating name="disabled" value={review.price} disabled />
              <Rating name="disabled" value={review.distance} disabled />
              <Rating name="disabled" value={review.safety} disabled />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
}

export function VarStarRating() {
  const [generalValue, setGeneralValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [distanceValue, setDistanceValue] = useState(0);
  const [safetyValue, setSafetyValue] = useState(0);

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">General</Typography>
            <Rating
              name="general-rating"
              value={generalValue}
              onChange={(event, newValue) => {
                setGeneralValue(newValue);
              }}
            />
          </Box>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Price</Typography>
            <Rating
              name="price-rating"
              value={priceValue}
              onChange={(event, newValue) => {
                setPriceValue(newValue);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Distance</Typography>
            <Rating
              name="distance-rating"
              value={distanceValue}
              onChange={(event, newValue) => {
                setDistanceValue(newValue);
              }}
            />
          </Box>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Safety</Typography>
            <Rating
              name="safety-rating"
              value={safetyValue}
              onChange={(event, newValue) => {
                setSafetyValue(newValue);
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

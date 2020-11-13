import React from "react";
import AppBarSearch from "./AppBarSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginTop: theme.spacing(2),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}));

const housings = [
  {
    id: 1,
    address: "72 Street",
    user_id: 2,
    rating: 4,
    cost: 1350,
    description: "A good house",
  },
  {
    id: 2,
    address: "33 Street",
    user_id: 4,
    rating: 2,
    cost: 800,
    description: "a cheap house",
  },
];

function handleButtonClick(housing) {
    window.location.href = `/detail/:${housing.id}`;
}

export default function SearchPage() {
  const classes = useStyles();
  return (
    <>
      <AppBarSearch />
      <Grid container spacing={4} className={classes.subTitle}>
        <Typography variant="h3">Search Result</Typography>
      </Grid>
      <div className={classes.root}>
        {housings.map((housing) => {
          return (
            <Paper key={housing.id} className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    className={classes.image}
                    onClick={() => handleButtonClick(housing)}
                  >
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/public/logo512.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {housing.address}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {housing.rate}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {housing.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="secondary">
                          Favorite
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{`$${housing.cost}/mon`}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </div>
    </>
  );
}

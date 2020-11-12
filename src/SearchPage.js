import React from "react";
import AppBarSearch from "./AppBarSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
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

export default function SearchPage() {
  const classes = useStyles();
  return (
    <>
      <AppBarSearch />
      <Grid container spacing={4} className={classes.subTitle}>
        <Typography variant="h3">Search Result</Typography>
      </Grid>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
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
                    Standard
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution
                  </Typography>
                  <Typography variant="body2" color="textSecpndary">
                    ID: 99999
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

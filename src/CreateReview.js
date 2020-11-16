import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import { fetchHousing } from "./api";
import { VarStarRating } from "./components/StarRating";
import AppBarSearch from "./components/AppBarSearch";
import { Helmet } from "react-helmet";

const TITLE = "Create Review";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  rating: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function CreateReview() {
  const classes = useStyles();
  const { id } = useParams();

  const [housing, setHousing] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetchHousing(id).then((response) => {
      console.log(response);
      setHousing(response);
    });
  }, [id]);

  function handleSubmit() {
    setSubmit(true);
  }

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <React.Fragment>
        <CssBaseline />
        <AppBarSearch />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              {`Review for ${housing.address}`}
            </Typography>
            <React.Fragment>
              <div className={classes.rating}>
                <VarStarRating submit={submit} housing={housing} />
              </div>
            </React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Paper>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

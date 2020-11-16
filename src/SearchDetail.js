import React, { useEffect, useState } from "react";
import AppBarSearch from "./components/AppBarSearch";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useParams, useHistory } from "react-router-dom";
import { fetchHousing } from "./api";
import { Paper } from "@material-ui/core";
import Footer from "./components/Footer";
import { FixStarRating } from "./components/StarRating";
import Button from "@material-ui/core/Button";
import {Helmet} from "react-helmet";

const TITLE = 'Search Detail';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    margin: theme.spacing(2, 2, 2, 2),
  },
  detailGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  reviews: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 2, 4, 4),
  },
  btn: {
    margin: theme.spacing(3),
  },
}));

function handleCreateClick(id){
    window.location.href = `/create/${id}`;
}

export default function SearchDetail() {
  const classes = useStyles();
  const { id } = useParams();

  const [housing, setHousing] = useState({
      reviews: [],
  });

  useEffect(() => {
    fetchHousing(id).then((response) => {
      console.log(response);
      setHousing(response);
    });
  }, [id]);

  return (
    <>
    <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <AppBarSearch />
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Container maxWidth="md" className={classes.detailGrid}>
                <Grid container spacing={4} className={classes.subTitle}>
                  <Typography variant="h3">{housing.address}</Typography>
                </Grid>
              </Container>
              <Container maxWidth="md" className={classes.detailGrid}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <img alt={housing.address} src={housing.img} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="h4">
                      Description
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      {housing.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Button variant="outlined" color="secondary" className={classes.btn} onClick={() => handleCreateClick(housing.id)}>Write a Review</Button>
              <Container maxWidth="md" className={classes.reviews}>
                <Typography gutterBottom variant="h5">
                  Reviews
                </Typography>
                <Grid container spacing={2}>
                  {housing.reviews.map((review) => {
                    return <FixStarRating review={review} key={review.user_id}/>;
                  })}
                </Grid>
              </Container>
            </Paper>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

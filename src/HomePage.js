import * as React from "react";
import AppBarSearch from "./components/AppBarSearch";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardView from "./components/CardView";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  subTitle: {
    marginBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  {
    id: 3,
    address: "88 Street",
    user_id: 4,
    rating: 2,
    cost: 800,
    description: "a 3rd house",
  },
  {
    id: 4,
    address: "55 Street",
    user_id: 4,
    rating: 2,
    cost: 800,
    description: "a 55 house",
  },
];

function handleSearchClick() {
  window.location.href = "/search";
}

function handleCreateClick() {
  window.location.href = "/create";
}

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <AppBarSearch />
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Reliable Housing
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Provide transparent off-campus housing information for USC
                students seeking a place to live. Write a review today to help
                your peers to find better housing!
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={10} justifycontent="center">
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSearchClick}
                    >
                      Housing Search
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleCreateClick}
                    >
                      Write a Review
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} className={classes.subTitle}>
              <Typography variant="h3">Featured Housing</Typography>
            </Grid>
            {/* End hero unit */}
            <CardView housings={housings}/>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

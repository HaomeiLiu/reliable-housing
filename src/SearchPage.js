import React from "react";
import AppBarSearch from "./components/AppBarSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardView from "./components/CardView";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
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

export default function SearchPage() {
  const classes = useStyles();
  return (
    <>
      <AppBarSearch />
      <React.Fragment>
        <CssBaseline />
        <main>
          <Grid container spacing={4} className={classes.subTitle}>
            <Typography variant="h3">Search Result</Typography>
          </Grid>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <CardView housings={housings} />
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

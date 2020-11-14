import React from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {db} from "./mock-api/db.json";

const housings = JSON.parse(JSON.stringify(db));

const housing = {
  id: 1,
  address: "72 Street",
  description: "A good house",
  reviews: [
    {
      user_id: 18,
      general: 4,
      price: 3,
      distance: 2,
      safety: 5,
    },
    {
      user_id: 16,
      general: 3,
      price: 3,
      distance: 2,
      safety: 4,
    },
  ],
};

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

export default function SearchDetail({ housing }) {
    console.log(housings);
  return (
    <>
      <ButtonAppBar />
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Typography variant="h3">{housing.address}</Typography>
            </Grid>
            {/* End hero unit */}
          </Container>
        </main>
      </React.Fragment>
    </>
  );
}

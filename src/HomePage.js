import * as React from "react";
import AppBarSearch from "./AppBarSearch";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { CardActionArea } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                      Write a Review!
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
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Reliable Housing
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Find your housing near USC, today.
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </>
  );
}

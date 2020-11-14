import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Favorite from "@material-ui/icons/Favorite";
import Create from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
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
  favIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: theme.palette.secondary.light,
  },
  createIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: theme.palette.primary.main,
  },
}));

function handleCardClick(housing) {
  window.location.href = `/detail/:${housing.id}`;
}

function handleReviewClick(housing) {
    window.location.href = `/create/:${housing.id}`;
}

function handleFavClick(housing){

}

export default function CardView({ housings }) {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      {housings.map((housing) => (
        <Grid item key={housing.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => handleCardClick(housing)}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {housing.address}
                </Typography>
                <Typography>{housing.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" onClick={() => handleFavClick(housing)}>
                <div className={classes.favIcon}>
                  <Favorite />
                </div>
                Fav
              </Button>
              <Button size="small" onClick={() => handleReviewClick(housing)}>
                <div className={classes.createIcon}>
                  <Create />
                </div>
                Review
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

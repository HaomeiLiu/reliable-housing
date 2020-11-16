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
import { addFav, fetchMember } from "../api";
import { useCookies } from "react-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  window.location.href = `/detail/${housing.id}`;
}

function handleReviewClick(housing) {
  window.location.href = `/create/${housing.id}`;
}

export default function CardView({ housings, login }) {
  const [cookies] = useCookies(["user"]);
  const classes = useStyles();
  const [member, setMember] = React.useState({
    fav: [],
  });
  React.useEffect(() => {
    fetchMember(cookies.user_id_db).then((response) => {
      setMember(response);
    });
  }, [cookies]);

  function handleFavClick(housing) {
    const newFavs = member.fav;
    newFavs.push(housing.id);
    addFav({
      ...member,
      fav: newFavs,
    }).then((response) => {
      setMember(response);
    });
  }
  return (
    <Grid container spacing={4}>
      {housings.map((housing) => (
        <Grid
          data-testid="housing_container"
          item
          key={housing.id}
          xs={12}
          sm={6}
          md={4}
        >
          <Card className={classes.card}>
            <CardActionArea onClick={() => handleCardClick(housing)}>
              {housing.img ? (
                <CardMedia
                  className={classes.cardMedia}
                  image={housing.img}
                  title="Image title"
                />
              ) : (
                <CircularProgress />
              )}
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {housing.address}
                </Typography>
                <Typography>{housing.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                data-testid="fav-btn"
                size="small"
                disabled={
                  login
                    ? member.fav.filter((f) => {
                        return f === housing.id;
                      }).length === 0
                      ? false
                      : true
                    : true
                }
                onClick={() => handleFavClick(housing)}
              >
                <div className={classes.favIcon}>
                  <Favorite />
                </div>
                {member.fav.filter((f) => {
                  return f === housing.id;
                }).length === 0
                  ? "Fav"
                  : "Added"}
              </Button>
              <Button
                size="small"
                data-testid="review-btn"
                disabled={!login}
                onClick={() => handleReviewClick(housing)}
              >
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

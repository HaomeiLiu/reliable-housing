import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Favorite from "@material-ui/icons/Favorite";
import Create from "@material-ui/icons/Create";
import { addFav, fetchMember } from "../api";
import { useCookies } from "react-cookie";

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

function removeArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

export default function CardViewProfile({ housings, login }) {
  const [cookies] = useCookies(["user"]);
  const classes = useStyles();
  const [member, setMember] = React.useState({
    fav:[],
  });
  React.useEffect(() => {
    fetchMember(cookies.user_id_db).then((response) => {
      setMember(response);
    });
  }, [cookies]);

  function handleRemoveClick(housing) {
    const newFavs = removeArray(member.fav, housing.id);
    addFav({
      ...member,
      reviews: newFavs,
    }).then((response) => {
      setMember(response);
    });
    window.location.href = "/profile";
  }

  return (
    <Grid container spacing={4}>
      {housings.map((housing) => (
        <Grid data-testid="card" item key={housing[0].id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => handleCardClick(housing[0])}>
              {(housing[0].img) ? (<CardMedia
                className={classes.cardMedia}
                src={housing.img}
                title="Image title"
              />) : (<CircularProgress/>)}
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {housing[0].address}
                </Typography>
                <Typography>{housing[0].description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleRemoveClick(housing[0])}
              >
                <div className={classes.favIcon}>
                  <Favorite />
                </div>
                Remove
              </Button>
              <Button
                size="small"
                disabled={!login}
                onClick={() => handleReviewClick(housing[0])}
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

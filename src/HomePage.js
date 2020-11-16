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
import { useCookies } from "react-cookie";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Helmet } from "react-helmet";

const TITLE = "Home";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const housings = [
  {
    id: 1,
    address: "The Kenmore - 1331 W. 72 Street",
    description:
      "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
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
  },
  {
    id: 2,
    address: "Appolo - 1033 E. 21 Place",
    description:
      "A warm home to stay in. Pets allowed. Near CVS, Target, and DMV.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/2.jpg",
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
  },
  {
    id: 3,
    address: "ABC House - 1290 W. 88 Street",
    description:
      "A 3rd house for testing. A very welcomed place among students who like to party.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/3.jpg",
    reviews: [
      {
        user_id: 18,
        general: 4,
        price: 3,
        distance: 2,
        safety: 5,
      },
    ],
  },
  {
    id: 4,
    address: "Cool Apartment - 1632 W. 55 Street",
    description:
      "A 55 house. Located in downtown LA, you can enjoy the vibe of the city.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/4.jpg",
    reviews: [],
  },
];

function handleSearchClick() {
  window.location.href = "/search";
}

export default function HomePage() {
  const classes = useStyles();
  const [cookies] = useCookies(["user"]);
  const [login, setLogin] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  console.log(cookies);

  React.useEffect(() => {
    if (cookies.user_id && cookies.user_id !== "undefined") {
      setLogin(true);
    }
  }, [cookies]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
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
                students seeking a place to live.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Create an accout or login to add housing to your favorite, or
                create a review!
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
                      onClick={handleOpen}
                    >
                      Write a Review
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{ timeout: 500 }}
                    >
                      <Fade in={open}>
                        <div className={classes.paper}>
                          <Typography id="transition-modal-title" variant="h6">
                            Create a Review
                          </Typography>
                          <Typography
                            id="transition-modal-description"
                            variant="body1"
                          >
                            Search for the housing you have lived in, and write
                            a review!
                          </Typography>
                        </div>
                      </Fade>
                    </Modal>
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
            <CardView housings={housings} login={login} />
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

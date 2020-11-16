import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import CardViewProfile from "./components/CardViewProfile";
import { fetchMember, fetchHousings } from "./api";
import AppBarSearch from "./components/AppBarSearch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Helmet} from "react-helmet";
import Footer from "./components/Footer";

const TITLE = 'Profile';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  btnCont:{
      display: "flex",
      justifyContent: "flex-end",
  },
  btn: {
      margin: theme.spacing(2),
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [login, setLogin] = React.useState(false);
  const [housings, setHousings] = useState([]);
  const [member, setMember] = useState({
    fav: [],
  });
  const [ready, setReady] = useState(false);

  // const history = useHistory();

  function handleLogoutClick() {
    removeCookie("user");
    removeCookie("user_id");
    window.location.href = "/";
  }

  useEffect(() => {
    if (cookies.user_id) {
      setLogin(true);
    }
  }, [cookies]);

  useEffect(() => {
    if (login) {
      fetchMember(cookies.user_id_db).then((response) => {
        setMember(response);
      });
    }
  }, [login]);

  useEffect(() => {
      setReady(false);
    fetchHousings().then((response) => {
      const favHousing = member.fav.map((f) => {
       return( 
           response.filter((r)=>{
               return r.id===f;
           })
       );
      });
      setHousings(favHousing);
      setReady(true);
      console.log(housings);
    });
  }, [member]);

  return (
    <>
    <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <AppBarSearch />
      <div className={classes.btnCont}>
      <Button onClick={handleLogoutClick} variant="outlined" color="secondary" className={classes.btn}>Logout</Button>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} className={classes.subTitle}>
          <Typography variant="h3">Favorite Housing</Typography>
        </Grid>
        {ready && <CardViewProfile housings={housings} login={login} />}
      </Container>
      <Footer/>
    </>
  );
}

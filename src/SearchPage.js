import React, { useEffect, useState } from "react";
import AppBarSearch from "./components/AppBarSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardView from "./components/CardView";
import Footer from "./components/Footer";
import {useCookies} from "react-cookie";
import {fetchHousings, fetchMatchHousing} from "./api";
import { useLocation } from "react-router-dom";

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

export default function SearchPage() {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [login, setLogin] = useState(false);
  const [housings, setHousings] = useState([]);
  const key = useLocation().search;
  
  useEffect(()=>{
    if (cookies.user_id) {
      setLogin(true);
    }
    if(key === ""){
      fetchHousings().then((response)=>{
        setHousings(response);
      })
    }
    else{
      fetchMatchHousing(key).then((response) => {
        setHousings(response);
      })
    }
  }, []);
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
            <CardView housings={housings} login={login}/>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </>
  );
}

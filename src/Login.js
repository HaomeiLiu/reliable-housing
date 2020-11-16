import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import { fetchMemberByUserId } from "./api";
import { CircularProgress } from "@material-ui/core";
import { useCookies } from "react-cookie";
import { Helmet } from "react-helmet";

const TITLE = "Login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [invalidIn, setInvalidIn] = useState(false);
  const [invalidId, setInvalidId] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (cookies.setUser) {
      setUserId(cookies.setUser);
    }
    if (cookies.setPass) {
      setPass(cookies.setPass);
    }
  }, [cookies.setUser, cookies.setPass]);

  function handleSubmit(e) {
    e.preventDefault();
    if (userId === "" || pass === "") {
      setInvalidIn(true);
      setInvalidId(false);
      setInvalidPass(false);
    } else {
      setLoading(true);
      setInvalidIn(false);
      const promise = fetchMemberByUserId(userId);
      promise.then(
        (result) => {
          //Check Password
          setLoading(false);
          console.log(result[0]);
          if (result[0]) {
            if (result[0].pass === pass) {
              //Correct
              if (e.target.remember.checked) {
                setCookie("setUser", userId);
                setCookie("setPass", pass);
              } else {
                removeCookie("setPass");
              }
              setCookie("user_id", userId);
              setCookie("user_id_db", result[0].id);
              window.location.href = "/";
            } else {
              setInvalidPass(true);
              setInvalidId(false);
              setPass("");
            }
          } else {
            setLoading(false);
            setInvalidId(true);
            setInvalidPass(false);
            setPass("");
          }
        },
        () => {
          setLoading(false);
          setInvalidId(true);
          setInvalidPass(false);
          setPass("");
        }
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_id"
              label="User ID"
              name="user_id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  id="remember"
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? <CircularProgress /> : <>Sign In</>}
            </Button>
            <Grid container>
              <Grid item xs>
                {invalidIn && (
                  <Typography variant="body2" color="secondary">
                    Please fill in all fields.
                  </Typography>
                )}
                {invalidPass && (
                  <Typography variant="body2" color="secondary">
                    Incorrect password.
                  </Typography>
                )}
                {invalidId && (
                  <Typography variant="body2" color="secondary">
                    Invalid user ID.
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

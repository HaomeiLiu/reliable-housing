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
import { fetchMemberByUserId, postMember } from "./api";
import { CircularProgress } from "@material-ui/core";
import { useCookies } from "react-cookie";

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

export default function SignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [invalidIn, setInvalidIn] = useState(false);
  const [invalidUserId, setInvalidUserId] = useState(false);
  const [shortPass, setShortPass] = useState(false);

  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (userId === "" || pass === "") {
      setInvalidIn(true);
      setInvalidUserId(false);
      setShortPass(false);
    } 
    else if(pass.length < 6){
        setInvalidIn(false);
        setInvalidUserId(false);
        setShortPass(true);
    }
    else {
      setLoading(true);
      setInvalidIn(false);
      fetchMemberByUserId(userId).then(
        (response) => {
            setShortPass(false);
          if (response.length === 0) {
            const promise = postMember({
              user_id: userId,
              pass: pass,
              fav: [],
              reviws: [],
            });
            promise.then(
              (result) => {
                if (e.target.remember.checked) {
                  setCookie("setUser", userId);
                  setCookie("setPass", pass);
                } else {
                  removeCookie("setPass");
                }
                setCookie("user_id", userId);
                setCookie("user_id_db", result.id);
                window.location.href = "/";
              },
              (error) => {
                setLoading(false);
                setInvalidUserId(true);
                setPass("");
              }
            );
          } else {
            setInvalidUserId(true);
            setLoading(false);
          }
        },
        () => {}
      );
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              {loading ? <CircularProgress /> : <>Sign Up</>}
            </Button>
            <Grid container>
              <Grid item xs>
                {invalidIn && (
                  <Typography variant="body2" color="secondary">
                    Please fill in all fields.
                  </Typography>
                )}
                {invalidUserId && (
                  <Typography variant="body2" color="secondary">
                    Repeated user ID.
                  </Typography>
                )}
                {shortPass && (
                  <Typography variant="body2" color="secondary">
                    Password too short.
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login."}
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

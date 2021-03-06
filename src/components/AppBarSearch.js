import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/House";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useCookies } from "react-cookie";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function AppBarSearch() {
  const classes = useStyles();
  const [cookies] = useCookies(["user"]);
  let loginStatus = (typeof cookies.user_id === "undefined" || cookies.user_id  === "undefined") ? false : true;
  const [isLogin, setIsLogin] = useState(loginStatus);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setIsLogin(loginStatus);
  }, [cookies, loginStatus]);

  function handleLoginClick() {
    window.location.href = "/login";
  }

  function handleSearch(e) {
    e.preventDefault();
    window.location.href = `/search/?address_like=${searchInput}`;
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={(event) => (window.location.href = "/")}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Search Housing Near USC
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form autoComplete="off" noValidate onSubmit={handleSearch}>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              ></InputBase>
            </form>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isLogin ? (
              <IconButton
                edge="end"
                aria-label="account"
                color="inherit"
                onClick={(event) => (window.location.href = "/profile")}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <Button
                data-testid="login"
                color="inherit"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import SearchDetail from "./SearchDetail";
import CreateReview from "./CreateReview";
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import {CookiesProvider} from 'react-cookie';
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const history = useHistory();

  return (
    <>
      <CookiesProvider>
      <Router>
        <main>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/search" exact={true}>
            <SearchPage />
          </Route>
          <Route path="/create" exact={true}>
            <CreateReview />
          </Route>
          <Route path="/create/:id" exact={true}>
            <CreateReview />
          </Route>
          <Route path="/detail/:id" exact={true}>
            <SearchDetail />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}>
            <SignUp />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        </main>
      </Router>
      </CookiesProvider>
    </>
  );
}

export default App;

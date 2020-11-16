import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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

  return (
    <>
      <CookiesProvider>
      <Router>
        <main>
        <Switch>
          <Route data-testid="path" path="/" exact={true}>
            <HomePage />
          </Route>
          <Route data-testid="path" path="/search" exact={true}>
            <SearchPage />
          </Route>
          <Route data-testid="path" path="/create" exact={true}>
            <CreateReview />
          </Route>
          <Route data-testid="path" path="/create/:id" exact={true}>
            <CreateReview />
          </Route>
          <Route data-testid="path" path="/detail/:id" exact={true}>
            <SearchDetail />
          </Route>
          <Route data-testid="path" path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route data-testid="path" path="/login" exact={true}>
            <Login />
          </Route>
          <Route data-testid="path" path="/signup" exact={true}>
            <SignUp />
          </Route>
          <Route data-testid="path" path="*">
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

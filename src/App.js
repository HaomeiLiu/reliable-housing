import "./App.css";
import React, { useState } from "react";
import AppBarSearch from "./AppBarSearch";
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

function App() {
  const history = useHistory();

  return (
    <div>
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
          <Route path="/detail/:id" exact={true}>
            <SearchDetail />
          </Route>
          {/* 
          
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route> */}
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

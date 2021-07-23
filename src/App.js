/** @format */

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PlayGames from "./components/playGames";
import SignUp from "./components/SignUp";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/playGames" exact component={PlayGames} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;

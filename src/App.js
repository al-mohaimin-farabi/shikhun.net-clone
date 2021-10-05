import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Course from "./Components/Course/Course";
import Tranding from "./Components/Trending/Tranding";
import AbouteUs from "./Components/AbouteUs/AbouteUs";
import NotFound from "./Components/NotFound/NotFound";
import Enrole from "./Components/Enrole/Enrole";

function App() {
  // route for every page
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/course">
              <Header></Header>
              <Course></Course>
              <Footer></Footer>
            </Route>
            <Route exact path="/tranding-courses">
              <Header></Header>
              <Tranding></Tranding>
              <Footer></Footer>
            </Route>
            <Route exact path="/aboute-us">
              <Header></Header>
              <AbouteUs></AbouteUs>
            </Route>
            <Route path="/enrole">
              <Enrole></Enrole>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

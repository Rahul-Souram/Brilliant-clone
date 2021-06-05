import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Practice from "./Pages/Practice";
import Courses from "./Pages/Courses";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Practice />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

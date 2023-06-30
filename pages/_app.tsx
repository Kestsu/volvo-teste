import { Home } from "../src/containers/Home";
import { Learn } from "../src/containers/Learn";
import { Shop } from "../src/containers/Shop";
import { NotFound } from "../src/containers/NotFound";
import "../public/css/styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function HomePage() {
  return (
    <React.StrictMode>
      {typeof window !== "undefined" && (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/learn/:id" component={Learn} />
            <Route exact path="/shop/:id" component={Shop} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </React.StrictMode>
  );
}

export default HomePage;

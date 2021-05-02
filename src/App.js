import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="center">World of Dogs</h1>
      </Link>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id"></Details>
      </Router>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

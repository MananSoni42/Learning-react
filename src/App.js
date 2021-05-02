import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// top of App function body

const App = () => {
  const theme = useState({ bg: "white", txt: "darkgray" });
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Link to="/">
          <h1 className="center">World of Dogs</h1>
        </Link>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

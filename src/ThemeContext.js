import React, { createContext } from "react";

const ThemeContext = createContext([
  { bg: "white", txt: "darkgray" },
  () => {},
]);

export default ThemeContext;

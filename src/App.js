import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
    return (
        <div>
            <h1>World of Dogs</h1>
            <h2><Pet h="Luna" sh1="dog" sh2="Havanese"/></h2>
            <h2><Pet h="Anna" sh1="dog" sh2="other"/></h2>
            <h2><Pet h="Harry" sh1="dog" sh2="yet another"/></h2>
        </div>
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

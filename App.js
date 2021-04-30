const Pet = props => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.h),
        React.createElement("h2", {}, props.sh1),
        React.createElement("h2", {}, props.sh2),
    ]);
}

const Pet_alt = ({h,sh1,sh2}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, h),
        React.createElement("h2", {}, sh1),
        React.createElement("h2", {}, sh2),
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {"id": "header"},
        [
            React.createElement("h1", {}, "Hello, world!"),
            React.createElement(Pet_alt, { h: 'heading1', sh1: 'sh1', sh2: 'sh2'}),
            React.createElement(Pet_alt, { h: 'heading1234', sh1: 'sh123', sh2: 'sh234'}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

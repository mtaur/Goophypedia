// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
var Main = require("./components/Main");

//var images = require("../server.js");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main />, document.getElementById("app"));
//ReactDOM.render(<Main gifsData={images}>, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import Logo from "./Logo.js"
import Spoty from "./spotify.js"
import StickyUp from "./sticky.js"
import './styles/style.css'

ReactDOM.render(<><App /><Logo /><StickyUp /><Spoty /></>, document.getElementById("root"));
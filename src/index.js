import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import Logo from "./Logo.js"
import Spoty from "./spotify.js"
import Profile from "./profile.js"
import StickyUp from "./sticky.js"
import './styles/style.css'

ReactDOM.render(<><App /><Logo /><StickyUp /><Spoty /><Profile /> </>, document.getElementById("root"));
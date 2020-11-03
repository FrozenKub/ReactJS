import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import App from "./App.jsx"
import Logo from "./Logo.jsx"
import Spoty from "./Spotify.jsx"
import Profile from "./Profile.jsx"
import StickyUp from "./Sticky.jsx"
import Login from "./Login.jsx"



export default function Main() {
    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">

                        <div className="centered">
                            <a className="button">
                                <Link to="/">Home</Link>
                            </a>
                            <a className="button">
                                <Link to="/login">Login</Link>
                            </a>
                            <a className="button">
                                <Link to="/main">Main</Link>
                            </a>
                        </div>

                    </Route>

                    <Route exact path="/login">
                            <Login />
                    </Route>
                    <Route exact path="/main">
                        <>
                        <App />
                            <Logo />
                            <Spoty />
                            <Profile />
                            <StickyUp />
                        </>
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2></h2>;
}

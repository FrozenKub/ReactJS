import React, {useRef, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import App from "./App.jsx"
import Spoty from "./Spotify.jsx"
import Profile from "./Profile.jsx"
import StickyUp from "./Sticky.jsx"
import Login from "./Login.jsx"
import Code from "./Code.jsx"
import Auth from "./Auth.jsx"
import Register from "./Register.jsx"
import { SnackbarProvider } from 'notistack';

export default function Main() {


    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">

                        <div className="centered">
                            <img src="/AnFoLogo.png" className="logo"/>
                            <a>
                                <Link to="/auth">Auth</Link>
                            </a>
                            <a>
                                <Link to="/login">Login</Link>
                            </a>
                            <a>
                                <Link to="/register">Register</Link>
                            </a>
                            <a>
                                <Link to="/main">Main</Link>
                            </a>
                        </div>

                    </Route>



                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                    <Route exact path="/code">
                        <Code />
                    </Route>
                    <Route exact path="/login">
                            <Login />
                    </Route>
                    <Route exact path="/main">
                        <>
                            <SnackbarProvider
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}>
                        <App />
                            </SnackbarProvider>
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
}

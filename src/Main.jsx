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
import Anim from "./animation.js"
import gsap from "gsap"

export default function Main() {
    let logoIcon = useRef(null);

    useEffect(()=>
    {
        document.addEventListener("mousemove", function(e){

            if (e.x>logoIcon.getBoundingClientRect().x
                && e.x<logoIcon.getBoundingClientRect().x + logoIcon.getBoundingClientRect().width
                && e.y>logoIcon.getBoundingClientRect().y
                && e.y<logoIcon.getBoundingClientRect().y + logoIcon.getBoundingClientRect().height)

                    if (e.x > logoIcon.getBoundingClientRect().x
                    && e.x < logoIcon.getBoundingClientRect().x + (logoIcon.getBoundingClientRect().width/2))
                    {
                        let valueXLeft = (logoIcon.getBoundingClientRect().width/2 - (e.x - logoIcon.getBoundingClientRect().x))/10;
                        gsap.to(logoIcon, 1, {rotationY: -1 * valueXLeft})
                    }
        })

    }, [])

    console.log(logoIcon);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">

                        <div className="centered">
                            <img ref={el => {logoIcon=el}} src="/AnFoLogo.png" className="logo"/>
                            <a className="button">
                                <Link to="/">Home</Link>
                            </a>
                            <a className="button">
                                <Link to="/animtest">animtest</Link>
                            </a>
                            <a className="button">
                                <Link to="/auth">Auth</Link>
                            </a>
                            <a className="button">
                                <Link to="/login">Login</Link>
                            </a>
                            <a className="button">
                                <Link to="/main">Main</Link>
                            </a>
                            <a className="button">
                                <Link to="/register">Register</Link>
                            </a>
                        </div>

                    </Route>



                    <Route exact path="/animtest">
                        <Anim />
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
                        <App />
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

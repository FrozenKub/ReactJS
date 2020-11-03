import React from "react";
import {Link} from "react-router-dom";

const StickyUp = () => {
    return (
        <>
        <div class="block-stiky">
            <img src="/public/AnFoLogo.png" height="5%" width="5%" alt="Hi"/>
        </div>
        <div class="block-stiky-text">

            <a class="button"><Link to="/login">Login</Link></a>
            <a className="button"><Link to="/code">Code</Link></a>
            <a class="button"><Link to="/">Home</Link></a>

        </div>
    </>
);
}

export default StickyUp;
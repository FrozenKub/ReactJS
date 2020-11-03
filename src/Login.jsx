import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div class="login-page">
            <img src="/public/AnFoLogo.png" className="logo"/>

            <div class="login">
                <div>
                     <input type="text" name='username' placeholder="Username"/>
                </div>

                <div>
                    <input type="password" name="password" placeholder="Password"/>
                </div>

            </div>

            <div><input type="submit" class="loginbutton" value="AUTHORIZE"/></div>
        </div>
    );
}

export default Login;
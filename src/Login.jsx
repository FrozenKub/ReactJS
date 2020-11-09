import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import styled from 'styled-components';

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 20vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;


const LargerA = styled.a`
font-size: 14pt;
`;

class loginClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {login: "", password: ""}
    }


    render() {
        return (

            <div className="login-page">


                <UpperCorner>
                    <LargerA>
                        <Link to="/">Home</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/auth">Apply for Authorization</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/code">Redeem Code</Link>
                    </LargerA>
                </UpperCorner>

                <img src="/public/AnFoLogo.png" className="logo"/>

                <div className="login">
                    <div>
                        <input type="text" onChange={e=>{this.setState({login: e.target.value})}} name="username" placeholder="Username"/>
                    </div>

                    <div>
                        <input type="password" onChange={e=>{this.setState({password: e.target.value})}} name="password" placeholder="Password"/>
                    </div>

                </div>

                <div><input type="submit" onClick={e=>{e.preventDefault(); alert(JSON.stringify(this.state))} } className="loginbutton" value="AUTHORIZE"/></div>
            </div>

        );
    }
}


export default loginClass;
import React from "react";

import styled from 'styled-components';


const LoginPasswordInput = styled.input`
font-size: 10pt;
color: #c5e5ef;
`;

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "CR34T0R",
            title: "HEY THERE!",
            content: "HERE IS CONTENT, YOU KNOW"
        }
    }

    render() {
        return (
            <div>

                <div className="profBlock">

                </div>

                <div class="profile">
                    <h3>Total Posts: 123</h3>
                    <h3>Total Comments: 587</h3>
                    <h3>Total AnLi: 332</h3>
                    <div>
                        <LoginPasswordInput type="text" onChange={e=>{this.setState({title: e.target.value})}} name="title" placeholder="Title"/>
                    </div>

                    <div>
                        <LoginPasswordInput type="text" onChange={e=>{this.setState({content: e.target.value})}} name="content" placeholder="Content"/>
                    </div>

                    <div>
                        <input type="submit" onClick={e=>{e.preventDefault(); alert(JSON.stringify(this.state))} } value="AUTHORIZE"/>
                    </div>
                </div>

                <div className="profile-pic">
                    <h2>ID: <span class="CR34T0R">@CR34T0R</span></h2>
                    <img src="/AF_Logo_1-01.png" width="20%" alt="Hi"/>

                </div>
            </div>
        );
    }
}

export default Profile;
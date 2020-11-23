import React from "react";

import styled from 'styled-components';
import Logo from './Logo.jsx';

const Themeh2 = styled.p`
  color: #bddce6;
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

class App extends React.Component{

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.state = {name: "", title: "", content: ""}
    }

    handleClick(e)
    {
        e.preventDefault();
    }


    render()
    {
        return (

            <>
                <Logo title={this.state.title} name={this.state.name} content={this.state.content}/>

            <div className="flex-container">
                <A>
                    <button onClick={e=>{this.setState({name: "CR34T0R", title: "H3LL0 W0R1D! W31C0M3 T0 TH3 F0RUM! (READ THIS)", content: "Welcome to the Anonymous Forum. This forum is a place for people to discuss anything you might want to discuss! We have created a few threads to get you started but feel free to start your own! Keep an eye out for red posts from moderators or even green posts from Forum creator himself! When you sign up to the forum, each and every one of you will get your own AnFo ID, which is a number based on when you signed up. You can find your AnFo ID by checking Profile Block on your right. NB: You do not have to post anything to see it. We love seeing all the exciting topics and discussions you have here! Remember to always respect all other AnFo users as we are all in this together! Abuse will not be tolerated and any unacceptable behavior will result in temporary or permanent bans from the AnFo society!"})}} className="theme">
                        <Themeh2 className="mar"><span className="CR34T0R">@CR34T0R</span> - H3LL0 W0R1D! W31C0M3 T0 TH3 F0RUM! (READ THIS)</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "AnF0_T34m", title: "HELLO! WELOCME!", content: "This is the way you move!"})}} className="theme">
                        <Themeh2 className="mar"><span className="AnF0_T34m">@AnF0_T34m</span> - HELLO! WELOCME!</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "41731", title: "My real Id?", content: "No, it's not"})}} className="theme">
                        <Themeh2 className="mar"><span>@41731</span> - My real Id?</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "4122", title: "I HATE THIS THING. LET US REST", content: "Just kidding."})}} className="theme">
                        <Themeh2 className="mar"><span>@4122</span> - I HATE THIS THING. LET US REST</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "23112", title: "PETYA is Strongest frog in the world", content: "Little did you know, that Petya is a frog."})}} className="theme">
                        <Themeh2 className="mar"><span>@23112</span> - PETYA is Strongest frog in the world</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "53422", title: "Reebok or Nike", content: "Is the Reebok or the Nike?"})}} className="theme">
                        <Themeh2 className="mar"><span>@53422</span> - Reebok or Nike</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "1233", title: "You are gay That is it", content: "Gay as shit, tolerant world, tolerant me."})}} className="theme">
                        <Themeh2 className="mar"><span>@1233</span> - You are gay That is it</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "11563", title: "Shitty forum, bruh", content: "Tru, mate"})}} className="theme">
                        <Themeh2 className="mar"><span>@11563</span> - Shitty forum, bruh</Themeh2>
                    </button>
                </A>
            </div>

                </>
        );
    }

}

export default App;
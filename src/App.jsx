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

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px #bddce6;
    background-color: #00080f;
`;

let array = [];

array.push({name: "1512", title: "NNN is over!", content: "Here we go again."})
array.push({name: "225", title: "Winter is cumming.", content: "No, not a mistake."})
array.push({name: "3243", title: "GachiKoff vs. GoodKoff", content: "What do you prefer?"})
array.push({name: "46234", title: "The garden was blessed by the Gods of me and you", content: "The garden was blessed by the Gods of me and you\n" +
        "We headed West to find ourselves some truth, oh\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "We counted all our reasons, excuses that we made\n" +
        "We found ourselves some treasure, and threw it all away\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "Caught in the tide of blossom, caught in the carnival\n" +
        "Your confidence forgotten, and I see the gypsies run\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "When I dance alone, I know I'll go\n" +
        "Blame it on me oh\n" +
        "When I'll lose control, I know I'll go\n" +
        "Blame it on me oh\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?"})
array.push({name: "51133", title: "DO NOT DO IT!", content: "https://youtu.be/dQw4w9WgXcQ"})
array.push({name: "6332", title: "Try me bitch.", content: "Yes"})


const TitleInput = styled.input`
width: 12vw;
font-size: 10pt;
color: #c5e5ef;
border-radius: 0.3em;
`;

const ContentInput = styled.textarea`
background-color: #00182d;
width: 13vw;
height: 9vh;
border-radius: 0.3em;
font-size: 10pt;
color: #c5e5ef;
`;

const PostSubmit = styled.input`
width: 13vw;
border-radius: 0.3em;
font-size: 10pt;
color: #c5e5ef;
    overflow-x: hidden;
    overflow-y: auto;
`;

const userId = "CR34T0R";

class App extends React.Component{

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.state = {name: userId, title: "", content: ""}
    }

    handleClick(e)
    {
        e.preventDefault();
    }

    createPost(e)
    {
        e.preventDefault();
        array.push({name: this.state.name, title: this.state.title, content: this.state.content})
        this.setState({name: this.state.name, title: this.state.title, content: this.state.content})
    }

    handlePostClick(e)
    {
        e.preventDefault();
        let x = document.getElementById("createPost");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }

    render()
    {
        return (

            <>
                <Logo title={this.state.title} name={this.state.name} content={this.state.content}/>

            <div className="flex-container">


                <A>
                    <Button onClick={e=>{this.handlePostClick(e)}} className="theme">
                        <Themeh2 className="mar">CREATE POST</Themeh2>
                    </Button>
                </A>

                <div id="createPost" className="post-create">


                        <TitleInput type="text" onChange={e=>{this.setState({title: e.target.value})}} name="title" placeholder="Title"/>



                        <ContentInput type="text" onChange={e=>{this.setState({content: e.target.value})}} name="content" placeholder="Content"/>


                        <PostSubmit type="submit" onClick={e=>{e.preventDefault(); this.createPost(e)} }  value="POST"/>
                </div>

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
                    <button onClick={e=>{this.setState({name: array[array.length-1].name, title: array[array.length-1].title, content: array[array.length-1].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-1].name}</span> - {array[array.length-1].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-2].name, title: array[array.length-2].title, content: array[array.length-2].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-2].name}</span> - {array[array.length-2].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-3].name, title: array[array.length-3].title, content: array[array.length-3].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-3].name}</span> - {array[array.length-3].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-4].name, title: array[array.length-4].title, content: array[array.length-4].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-4].name}</span> - {array[array.length-4].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-5].name, title: array[array.length-5].title, content: array[array.length-5].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-5].name}</span> - {array[array.length-5].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-6].name, title: array[array.length-6].title, content: array[array.length-6].content})}} className="theme">
                        <Themeh2 className="mar"><span>@{array[array.length-6].name}</span> - {array[array.length-6].title}</Themeh2>
                    </button>
                </A>
            </div>

                </>
        );
    }

}

export default App;
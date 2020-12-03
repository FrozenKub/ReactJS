import React from "react";



const userId = "CR34T0R";

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
                </div>

                <div className="profile-pic">
                    <h2>ID: <span class={userId}>@{userId}</span></h2>
                    <img src="/AF_Logo_1-01.png" width="20%" alt="Hi"/>

                </div>
            </div>
        );
    }
}

export default Profile;
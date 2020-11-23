import React from "react";

class Logo extends React.Component{

    constructor(props) {
        super(props);

        this.state = {name: "", title: "", content: ""}
    }

    render()
    {
    return (
        <>
        <div className="block-right-name">
            <h1 className="mar"><span className="fz">#{this.props.name} </span> - {this.props.title}</h1>
        </div>
        <div className="block-right">
            <p className="rightbcontent">
                {this.props.content}
            </p>
        </div>
            </>
    );
}
}

export default Logo;
import React from 'react';
import Size from '../Size.js';

const HeaderDesktop = {
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "rgba(0,0,0,.5)",
    marginBottom: "10px"
}

const HeaderDefault = {
    fontSize: "17px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "rgba(0,0,0,.5)",
    marginBottom: "10px"
}

const BodyDesktop = {
    fontSize: "30px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "black"
}

const BodyDefault = {
    fontSize: "24px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "black"
}

class ProjectPoint extends React.Component {
    render() { 
        return (<div>
            <Size.Desktop>
                <div style={HeaderDesktop}>{this.props.header}</div>
                <div style={BodyDesktop}>{this.props.body}</div>
            </Size.Desktop>
            <Size.Default>
                <div style={HeaderDefault}>{this.props.header}</div>
                <div style={BodyDefault}>{this.props.body}</div>
            </Size.Default>
        </div>)
    }
}

export default ProjectPoint;
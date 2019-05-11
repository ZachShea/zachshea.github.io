import React from 'react';
import Size from '../Size.js';

import normalLink from "../assets/icons/chevron-link-normal.svg"
import activeLink from "../assets/icons/chevron-link-active.svg"
import normalLinkSmall from "../assets/icons/chevron-link-normal-small.svg"
import activeLinkSmall from "../assets/icons/chevron-link-active-small.svg"

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

const BodyAndChevron = {
    display: "flex"
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

const Chevron = {
    marginLeft: "14px"
}

const Hover = {
    color: "#4CE6B2"
}

class ProjectPoint extends React.Component {
    constructor() {
        super()
        this.state = {hover: false}
    }

    setHover(hover) {
        this.setState({hover: hover})
    }

    getHoverStyle(style) {
        return {...style,...this.state.hover ? Hover : {}}
    }

    render() {
        if (this.props.link) {
            return (<div>
                <a href={this.props.link} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)} target="_blank" rel="noopener noreferrer">
                    <Size.Desktop>
                        <div style={this.getHoverStyle(HeaderDesktop)}>{this.props.header}</div>
                        <div style={BodyAndChevron}>
                            <div style={this.getHoverStyle(BodyDesktop)}>{this.props.body}</div>
                            <img style={Chevron} src={this.state.hover ? activeLink : normalLink} alt="Link"/>
                        </div>
                    </Size.Desktop>
                    <Size.Default>
                        <div style={this.getHoverStyle(HeaderDefault)}>{this.props.header}</div>
                        <div style={BodyAndChevron}>
                            <div style={this.getHoverStyle(BodyDefault)}>{this.props.body}</div>
                            <img style={Chevron} src={this.state.hover ? activeLinkSmall : normalLinkSmall} alt="Link"/>
                        </div>
                    </Size.Default>
                </a>
            </div>)
        }
        
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
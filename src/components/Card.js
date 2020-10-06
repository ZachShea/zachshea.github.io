import React from 'react';
import Size from '../Size.js';
import { Link } from "react-router-dom";
import '../Hoverable.css'

const ContentDesktop = {
  padding: "63px 40px 63px 40px",
  position: "relative",
  zIndex: "1",
  letterSpacing: "1px"
}

const ContentDefault = {
  padding: "44px 30px 44px 30px",
  position: "relative",
  zIndex: "1",
  letterSpacing: ".8px",
}

const SquareContent = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  justifyContent: "center"
}

const FlexibleContentDesktop = {
  padding: "8px 40px 8px 40px",
  position: "relative",
  zIndex: "1",
  letterSpacing: "1px",
}

const FlexibleContentDefault = {
  padding: "8px 30px 8px 30px",
  position: "relative",
  zIndex: "1",
  letterSpacing: ".8px",
}

const Description = {
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "8px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4), 0 5px 40px black"
}

const TitleDesktop = {
  fontSize: "50px",
  fontWeight: "700",
  marginBottom: "14px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
}

const TitleDefault = {
  fontSize: "40px",
  fontWeight: "700",
  marginBottom: "14px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
}

class Card extends React.Component {
  render() {
    const Main = {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: "6px",
      textDecoration: "none",
      color: "white",
      backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + this.props.background + ")"
    }

    let MainSquare = { 
      ...Main,
      width: "100%",
      paddingTop: "100%",
      position: "relative"
    }

    var inner = <div style={this.props.square ? SquareContent : {}}>
      <Size.Desktop>
        <div style={this.props.flexibleHeight ? FlexibleContentDesktop : ContentDesktop}>
          <div style={Description}>{this.props.description}</div>
          <div style={TitleDesktop}>{this.props.title}</div>
          <img src={this.props.icon} alt=""/>
        </div>
      </Size.Desktop>
      <Size.Default>
        <div style={this.props.flexibleHeight ? FlexibleContentDefault : ContentDefault}>
          <div style={Description}>{this.props.description}</div>
          <div style={TitleDefault}>{this.props.title}</div>
          <img src={this.props.icon} alt=""/>
        </div>
      </Size.Default>
    </div>

    if (!this.props.openNewWindow) {
      return <Link class={this.props.disabled ? "" : "HoverOpacity90"} style={Object.assign(this.props.square ? MainSquare : Main, this.props.style)} to={this.props.link}>{inner}</Link> 
    }

    return <a class={this.props.disabled ? "" : "HoverOpacity90"} style={Object.assign(this.props.square ? MainSquare : Main, this.props.style)} href={this.props.link} target="_blank" rel="noopener noreferrer">{inner}</a>
  }
}

Card.defaultProps = {
  openNewWindow: true
}

export default Card;

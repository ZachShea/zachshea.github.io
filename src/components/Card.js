import React from 'react';
import Size from '../Size.js';
import { Link } from "react-router-dom";

const ContentDesktop = {
  margin: "63px 40px 63px 40px",
  position: "relative",
  zIndex: "1",
  letterSpacing: "1px",
}

const ContentDefault = {
  margin: "44px 30px 44px 30px",
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
      const { background = "" } = this.props;
      
      const Main = {
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "6px",
        textDecoration: "none",
        color: "white",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + background + ")"
      }

      var inner = <div>
        <Size.Desktop>
          <div style={ContentDesktop}>
            <div style={Description}>{this.props.description}</div>
            <div style={TitleDesktop}>{this.props.title}</div>
            <img src={this.props.icon} alt=""/>
          </div>
        </Size.Desktop>
        <Size.Default>
          <div style={ContentDefault}>
            <div style={Description}>{this.props.description}</div>
            <div style={TitleDefault}>{this.props.title}</div>
            <img src={this.props.icon} alt=""/>
          </div>
        </Size.Default>
      </div>

      if (!this.props.openNewWindow) {
        return <Link style={Object.assign(Main, this.props.style)} to={this.props.link}>{inner}</Link> 
      }

      return <a style={Object.assign(Main, this.props.style)} href={this.props.link} target="_blank" rel="noopener noreferrer">{inner}</a>
    }
  }

  Card.defaultProps = {
    openNewWindow: true
  }
  
  export default Card;
  
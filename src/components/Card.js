import React from 'react';

const Content = {
  margin: "63px 40px 63px 40px",
  position: "relative",
  zIndex: "1",
  letterSpacing: "1px",
}

const Description = {
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "8px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4), 0 5px 40px black"
}

const Title = {
  fontSize: "50px",
  fontWeight: "700",
  marginBottom: "14px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
}

const IconBounds = {
  // height: "40px",
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center"
}

class Card extends React.Component {
    render() {
      const { background = "" } = this.props;
      
      const Main = {
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        // maxWidth: "510px",
        // minWidth: "315px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "6px",
        textDecoration: "none",
        color: "white",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + background + ")"
      }

      return (
        <a className="Card" style={Object.assign(Main, this.props.style)} href={this.props.link} target="_blank">
            <div style={Content}>
                <div style={Description}>{this.props.description}</div>
                <div style={Title}>{this.props.title}</div>
                <div style={IconBounds}><img src={this.props.icon}/></div>
            </div>
        </a>
      );
    }
  }
  
  export default Card;
  
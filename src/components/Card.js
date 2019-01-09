import React from 'react';
import '../styles/Card.css';

const Content = {
  margin: "63px 40px 63px 40px",
  position: "relative",
  zIndex: "1",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)",
  letterSpacing: "1px"
}

const Description = {
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "8px",
  textShadow: "0 5px 40px black"
}

const Title = {
  fontSize: "50px",
  fontWeight: "700",
  marginBottom: "14px"
}

class Card extends React.Component {
    render() {
      const { background = "" } = this.props;
      
      const Main = {
        display: "inline-block",
        width: "430px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "6px",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + background + ")"
      }

      return (
        <div style={Main}>
            <div style={Content}>
                <div style={Description}>{this.props.description}</div>
                <div style={Title}>{this.props.title}</div>
                <img src={this.props.icon}/>
            </div>
        </div>
      );
    }
  }
  
  export default Card;
  
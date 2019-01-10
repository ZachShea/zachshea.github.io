import React from 'react';
import hero from '../assets/heros/hero-home.jpg'
import chevron from '../assets/icons/chevron-right.svg'
import scrollIndicator from '../assets/icons/scroll-indicator.svg'

const Container = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "100px",
  paddingRight: "100px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const Title = {
  fontSize: "80px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "3px",
  marginTop: "236px",
  marginBottom: "82px",
  alignSelf: "center"
}

const Button = {
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "white",
  textDecoration: "none"
}

const Chevron = {
  marginLeft: "10px"
}

const ScrollIndicator = {
  marginTop: "auto",
  marginBottom: "50px"
}

class HomeHero extends React.Component {
    render() {
      const Main = {
        display: "flex",
        flexDirection: "column",
        height: "730px",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + hero + ")"
      }

      return (
        <div style={Main}>
            <div style={Container}>
                <div style={Title}>Digital Product Maker and Musician</div>
                <a style={Button} href="/me">
                  Get to know me<img style={Chevron} src={chevron}/>
                </a>
            </div>
            <img style={ScrollIndicator} src={scrollIndicator}/>
        </div>
      );
    }
  }
  
  export default HomeHero;
  
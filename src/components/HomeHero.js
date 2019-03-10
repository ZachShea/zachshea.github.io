import React from 'react';
import { Link } from "react-router-dom";

import Size from '../Size.js'
import hero from '../assets/heros/hero-home.jpg'
import chevron from '../assets/icons/chevron-right.svg'
import scrollIndicator from '../assets/icons/scroll-indicator.svg'

const ContainerBig = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "100px",
  paddingRight: "100px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const ContainerMobile = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "20px",
  paddingRight: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const TitleDesktop = {
  fontSize: "80px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "3px",
  marginTop: "236px",
  marginBottom: "82px",
  alignSelf: "center"
}

const TitleTablet = {
  fontSize: "70px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "3px",
  marginTop: "198px",
  marginBottom: "70px",
  alignSelf: "center"
}

const TitleMobile = {
  fontSize: "40px",
  fontWeight: "700",
  maxWidth: "450px",
  letterSpacing: "2px",
  marginTop: "163px",
  marginBottom: "50px",
  alignSelf: "center"
}

const ButtonBig = {
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "white",
  textDecoration: "none"
}

const ButtonMobile = {
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  fontSize: "20px",
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
      const MainBig = {
        display: "flex",
        flexDirection: "column",
        height: "730px",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + hero + ")"
      }

      const MainMobile = {
        display: "flex",
        flexDirection: "column",
        height: "536px",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + hero + ")"
      }

      return (
        <div id="home">
          <Size.Desktop>
            <div style={MainBig}>
                <div style={ContainerBig}>
                    <div style={TitleDesktop}>Digital Product Maker and Musician</div>
                    <Link style={ButtonBig} to="/me/">
                      Get to know me<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
                <img style={ScrollIndicator} src={scrollIndicator} alt=""/>
            </div>
          </Size.Desktop>
          <Size.Tablet>
            <div style={MainBig}>
                <div style={ContainerBig}>
                    <div style={TitleTablet}>Digital Product Maker and Musician</div>
                    <Link style={ButtonBig} to="/me/">
                      Get to know me<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
                <img style={ScrollIndicator} src={scrollIndicator} alt=""/>
            </div>
          </Size.Tablet>
          <Size.Mobile>
            <div style={MainMobile}>
                <div style={ContainerMobile}>
                    <div style={TitleMobile}>Digital Product Maker and Musician</div>
                    <Link style={ButtonMobile} to="/me/">
                      Get to know me<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
                <img style={ScrollIndicator} src={scrollIndicator} alt=""/>
            </div>
          </Size.Mobile>
        </div>
      );
    }
  }
  
  export default HomeHero;
  
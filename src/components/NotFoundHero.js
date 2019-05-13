import React from 'react';
import { Link } from "react-router-dom";

import Size from '../Size.js'
import chevron from '../assets/icons/chevron-right.svg'

const ContainerDesktop = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "150px 100px 150px 100px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const ContainerTablet = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "130px 100px 120px 100px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const ContainerMobile = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "110px 20px 100px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column"
}

const DescriptionBig = {
  letterSpacing: "1px",
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "10px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4), 0 5px 40px black"
}

const DescriptionMobile = {
  letterSpacing: "1px",
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "8px",
  textShadow: "0 4px 30px rgba(0,0,0,0.4), 0 5px 40px black"
}

const TitleDesktop = {
  fontSize: "60px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "2px",
  marginBottom: "82px",
  alignSelf: "center",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
}

const TitleTablet = {
  fontSize: "56px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "2px",
  marginBottom: "70px",
  alignSelf: "center",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
}

const TitleMobile = {
  fontSize: "40px",
  fontWeight: "700",
  maxWidth: "450px",
  letterSpacing: "2px",
  marginBottom: "50px",
  alignSelf: "center",
  textShadow: "0 4px 30px rgba(0,0,0,0.4)"
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

class NotFoundHero extends React.Component {
    render() {
      const MainBig = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + this.props.image + ")",
        borderRadius: "0 0 30px 30px",
        marginBottom: "-30px"
      }

      const MainMobile = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + this.props.image + ")",
        borderRadius: "0 0 20px 20px",
        marginBottom: "-20px"
      }

      return (
        <div id="hero">
          <Size.Desktop>
            <div style={MainBig}>
                <div style={ContainerDesktop}>
                    <div style={DescriptionBig}>{this.props.description}</div>
                    <div style={TitleDesktop}>{this.props.title}</div>
                    <Link style={ButtonBig} to="/">
                        Go Home<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
            </div>
          </Size.Desktop>
          <Size.Tablet>
            <div style={MainBig}>
                <div style={ContainerTablet}>
                    <div style={DescriptionBig}>{this.props.description}</div>
                    <div style={TitleTablet}>{this.props.title}</div>
                    <Link style={ButtonBig} to="/">
                        Go Home<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
            </div>
          </Size.Tablet>
          <Size.Mobile>
            <div style={MainMobile}>
                <div style={ContainerMobile}>
                    <div style={DescriptionMobile}>{this.props.description}</div>
                    <div style={TitleMobile}>{this.props.title}</div>
                    <Link style={ButtonMobile} to="/">
                        Go Home<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
            </div>
          </Size.Mobile>
        </div>
      );
    }
  }
  
  export default NotFoundHero;
  
import React from 'react';
import { Link } from "react-router-dom";

import Size from '../Size.js'
import me from '../assets/images/me.jpg'
import hero from '../assets/heros/hero-home.jpg'
import chevron from '../assets/icons/chevron-right.svg'
import scrollIndicator from '../assets/icons/scroll-indicator.svg'

import '../Hoverable.css'

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

const MeLink = {
  margin: "auto"
}

const MeDesktop = {
  width: "80px",
  height: "80px",
  borderRadius: "40px",
  marginTop: "156px",
}

const MeTablet = {
  width: "70px",
  height: "70px",
  borderRadius: "35px",
  marginTop: "128px",
}

const MeMobile = {
  width: "60px",
  height: "60px",
  borderRadius: "30px",
  marginTop: "108px",
}

const TitleDesktop = {
  fontSize: "80px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "3px",
  marginTop: "36px",
  marginBottom: "82px",
  alignSelf: "center"
}

const TitleTablet = {
  fontSize: "70px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "3px",
  marginTop: "30px",
  marginBottom: "70px",
  alignSelf: "center"
}

const TitleMobile = {
  fontSize: "40px",
  fontWeight: "700",
  maxWidth: "450px",
  letterSpacing: "2px",
  marginTop: "24px",
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
                    <Link class="HoverOpacity90" style={MeLink} to="/me">
                      <img style={MeDesktop} src={me} alt=""></img>
                    </Link>
                    <div style={TitleDesktop}>Digital Product Maker and Musician</div>
                    <Link class="HoverOpacity70" style={ButtonBig} to="/me">
                      Get to know me<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
                <img style={ScrollIndicator} src={scrollIndicator} alt=""/>
            </div>
          </Size.Desktop>
          <Size.Tablet>
            <div style={MainBig}>
                <div style={ContainerBig}>
                    <Link class="HoverOpacity90" style={MeLink} to="/me">
                      <img style={MeTablet} src={me} alt=""></img>
                    </Link>
                    <div style={TitleTablet}>Digital Product Maker and Musician</div>
                    <Link class="HoverOpacity70" style={ButtonBig} to="/me">
                      Get to know me<img style={Chevron} src={chevron} alt=""/>
                    </Link>
                </div>
                <img style={ScrollIndicator} src={scrollIndicator} alt=""/>
            </div>
          </Size.Tablet>
          <Size.Mobile>
            <div style={MainMobile}>
                <div style={ContainerMobile}>
                    <Link class="HoverOpacity90" style={MeLink} to="/me">
                      <img style={MeMobile} src={me} alt=""></img>
                    </Link>
                    <div style={TitleMobile}>Digital Product Maker and Musician</div>
                    <Link class="HoverOpacity70" style={ButtonMobile} to="/me">
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
  
import React from 'react';
import Size from '../Size.js'

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
  fontSize: "60px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "2px",
  marginTop: "164px",
  marginBottom: "194px",
  alignSelf: "center"
}

const TitleTablet = {
  fontSize: "56px",
  fontWeight: "700",
  maxWidth: "880px",
  letterSpacing: "2px",
  marginTop: "132px",
  marginBottom: "162px",
  alignSelf: "center"
}

const TitleMobile = {
  fontSize: "40px",
  fontWeight: "700",
  maxWidth: "450px",
  letterSpacing: "2px",
  marginTop: "100px",
  marginBottom: "130px",
  alignSelf: "center"
}

class Hero extends React.Component {
    render() {
      const MainBig = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + this.props.image + ")"
      }

      const MainMobile = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + this.props.image + ")"
      }

      return (
        <div id="hero">
          <Size.Desktop>
            <div style={MainBig}>
                <div style={ContainerBig}>
                    <div style={TitleDesktop}>{this.props.title}</div>
                </div>
            </div>
          </Size.Desktop>
          <Size.Tablet>
            <div style={MainBig}>
                <div style={ContainerBig}>
                    <div style={TitleTablet}>{this.props.title}</div>
                </div>
            </div>
          </Size.Tablet>
          <Size.Mobile>
            <div style={MainMobile}>
                <div style={ContainerMobile}>
                    <div style={TitleMobile}>{this.props.title}</div>
                </div>
            </div>
          </Size.Mobile>
        </div>
      );
    }
  }
  
  export default Hero;
  
import React from 'react';
import logo from "../assets/logo.svg";

const Main = {
    position: "absolute",
    width: "100%"
}

const Container = {
    maxWidth: "1080px",
    height: "100px",
    margin: "auto",
    paddingLeft: "100px",
    paddingRight: "100px",
    display: "flex",
    justifyContent: "space-between"
}

const Item = {
    alignSelf: "center"
}

const Link = {
    marginLeft: "50px",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    textDecoration: "none"
}

class Nav extends React.Component {
    render() {
      return (
        <div style={Main}>
            <div style={Container}>
                <a style={Item} href="/"><img src={logo}/></a>
                <div style={Item}>
                    <a style={Link} href="/">Me</a>
                    <a style={Link} href="/">Projects</a>
                    <a style={Link} href="/">Visuals</a>
                    <a style={Link} href="/">Music</a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Nav;
  
import React from 'react';
import menuClose from "../assets/icons/menu-close.svg"

const Main = {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    borderRadius: "0 0 20px 20px",
    position: "absolute"
}

const Container = {
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "25px 23px 25px 23px"
}

const LinksList = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
}

const Link = {
    marginBottom: "20px",
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    textDecoration: "none"
}

class NavMenu extends React.Component {
    render() {
      return (
        <div style={Main} id="projects">
            <div style={Container}>
                <a href="#"><img src={menuClose} onClick={this.props.closeMenu}/></a>
                <div style={LinksList}>
                    <a style={Link} href="/">Me</a>
                    <a style={Link} href="/#projects" onClick={this.props.closeMenu}>Projects</a>
                    <a style={Link} href="/#visuals" onClick={this.props.closeMenu}>Visuals</a>
                    <a style={Link} href="/#music" onClick={this.props.closeMenu}>Music</a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavMenu;
  
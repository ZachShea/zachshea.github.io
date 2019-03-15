import React from 'react';
import { HashLink } from 'react-router-hash-link';

import menuClose from "../assets/icons/menu-close.svg"

const Main = {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    borderRadius: "0 0 20px 20px",
    position: "fixed",
    zIndex: "1000",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
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

const LinkStyle = {
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
                <img style={{cursor:'pointer'}} src={menuClose} alt="Close Menu" onClick={this.props.closeMenu}/>
                <div style={LinksList}>
                    <HashLink style={LinkStyle} smooth to="/me#hero" onClick={this.props.closeMenu}>Me</HashLink>
                    <HashLink style={LinkStyle} smooth to="/#projects" onClick={this.props.closeMenu}>Projects</HashLink>
                    {/* <HashLink style={LinkStyle} smooth to="/#visuals" onClick={this.props.closeMenu}>Visuals</HashLink>
                    <HashLink style={LinkStyle} smooth to="/#music" onClick={this.props.closeMenu}>Music</HashLink> */}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavMenu;
  
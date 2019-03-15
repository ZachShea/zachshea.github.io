import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Size from '../Size.js';
import logo from "../assets/logo.svg";
import menu from "../assets/icons/menu.svg"

const Item = {
    alignSelf: "center"
}

const ItemFlex = {
    alignSelf: "center",
    flex: "1"
}

const LogoDefault = {
    width: "22px",
    height: "auto"
}

const LinkStyle = {
    marginLeft: "50px",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    textDecoration: "none"
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "transparent", 
            height: "100px",
            logoWidth: "auto"
        };
    }

    listenScrollEvent = e => {
        if (window.scrollY > 0) {
            this.setState({
                color: "rgba(0,0,0,0.85)", 
                height: "60px",
                logoWidth: "22px"
            })
        } 
        else {
            this.setState({
                color: "transparent", 
                height: "100px",
                logoWidth: "auto"
            })
        }
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent)
        this.listenScrollEvent()
    }

    render() {
      const Main = {
        position: "fixed",
        width: "100%",
        zIndex: "999",
        backgroundColor: this.state.color
      }

      const ContainerDesktop = {
        maxWidth: "1080px",
        height: this.state.height,
        margin: "auto",
        paddingLeft: "100px",
        paddingRight: "100px",
        display: "flex",
        justifyContent: "space-between"
      }
        
      const ContainerDefault = {
        maxWidth: "1080px",
        height: "70px",
        margin: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex"
      }

      const LogoDesktop = {
          width: this.state.logoWidth,
          height: "auto"
      }
        
      return (
        <div style={Main}>
            <Size.Desktop>
                <div style={ContainerDesktop}>
                    <HashLink style={Item} smooth to="/#home"><img src={logo} alt="Home" style={LogoDesktop}/></HashLink>
                    <div style={Item}>
                        <HashLink style={LinkStyle} smooth to="/me#hero">Me</HashLink>
                        <HashLink style={LinkStyle} smooth to="/#projects">Projects</HashLink>
                        {/* <HashLink style={LinkStyle} smooth to="/#visuals">Visuals</HashLink>
                        <HashLink style={LinkStyle} smooth to="/#music">Music</HashLink> */}
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={ContainerDefault}>
                    <div style={ItemFlex}><img style={{cursor:'pointer'}} src={menu} alt="Open Menu" onClick={this.props.openMenu}/></div>
                    <HashLink style={Item} smooth to="/#home"><img src={logo} alt="Home" style={LogoDefault}/></HashLink>
                    <div style={ItemFlex}/>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default NavBar;
  
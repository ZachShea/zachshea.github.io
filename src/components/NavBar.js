import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Size from '../Size.js';
import logo from "../assets/logo.svg";
import menu from "../assets/icons/menu.svg"

import '../Hoverable.css'

const Item = {
    alignSelf: "center"
}

const ItemFlex = {
    alignSelf: "center",
    flex: "1"
}

const LogoDefault = {
    padding: "20px",
    margin: "-20px",
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

const OpenMenuButton = {
    padding: "20px",
    margin: "-20px",
    cursor: 'pointer'
}

class NavBar extends React.Component {
    constructor() {
        super();
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
                    <HashLink class="HoverOpacity70" style={Item} smooth to="/#home"><img src={logo} alt="Home" style={LogoDesktop}/></HashLink>
                    <div style={Item}>
                        <HashLink class="HoverOpacity70" style={LinkStyle} smooth to="/me#hero">Me</HashLink>
                        <HashLink class="HoverOpacity70" style={LinkStyle} smooth to="/#projects">Projects</HashLink>
                        <HashLink class="HoverOpacity70" style={LinkStyle} smooth to="/#visuals">Visuals</HashLink>
                        <HashLink class="HoverOpacity70" style={LinkStyle} smooth to="/#music">Music</HashLink>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={ContainerDefault}>
                    <div style={ItemFlex}><img class="HoverOpacity70" style={OpenMenuButton} src={menu} alt="Open Menu" onClick={this.props.openMenu}/></div>
                    <HashLink class="HoverOpacity70" style={Item} smooth to="/#home"><img src={logo} alt="Home" style={LogoDefault}/></HashLink>
                    <div style={ItemFlex}/>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default NavBar;
  
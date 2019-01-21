import React from 'react';
import Size from '../Size.js';
import logo from "../assets/logo.svg";
import menu from "../assets/icons/menu.svg"

const Main = {
    position: "absolute",
    width: "100%"
}

const ContainerDesktop = {
    maxWidth: "1080px",
    height: "100px",
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

const Link = {
    marginLeft: "50px",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    textDecoration: "none"
}

class NavBar extends React.Component {
    render() {
      return (
        <div style={Main}>
            <Size.Desktop>
                <div style={ContainerDesktop}>
                    <a style={Item} href="/"><img src={logo}/></a>
                    <div style={Item}>
                        <a style={Link} href="/">Me</a>
                        <a style={Link} href="/#projects">Projects</a>
                        <a style={Link} href="/#visuals">Visuals</a>
                        <a style={Link} href="/#music">Music</a>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={ContainerDefault}>
                    <div style={ItemFlex}><a href="#"><img src={menu} onClick={this.props.openMenu}/></a></div>
                    <a style={Item} href="/"><img src={logo} style={LogoDefault}/></a>
                    <div style={ItemFlex}/>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default NavBar;
  
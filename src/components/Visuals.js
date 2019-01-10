import React from 'react';
import Tile from "./Tile.js"
import Card from "./Card.js"
import vis1 from "../assets/visuals/vis1.png"
import vis2 from "../assets/visuals/vis2.png"
import vis3 from "../assets/visuals/vis3.png"
import vis4 from "../assets/visuals/vis4.png"
import vis5 from "../assets/visuals/vis5.png"
import vis6 from "../assets/visuals/vis6.png"
import vis7 from "../assets/visuals/vis7.png"
import vis8 from "../assets/visuals/vis8.png"
import vis9 from "../assets/visuals/vis9.png"
import vis10 from "../assets/visuals/vis10.png"
import hero from "../assets/visuals/hero-dribbble.png"

const Container = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "100px"
}

const Title = {
  fontFamily: "ChicagoFLFRegular, Roboto, sans-serif",
  fontSize: "50px",
  textAlign: "center",
  letterSpacing: "14px",
  marginTop: "30px",
  marginBottom: "50px",
  position: "relative",
  zIndex: "1"
}

const Rainbow = {
    height: "3px",
    width: "1080px",
    position: "absolute",
    marginTop: "-79px",
    backgroundImage: "linear-gradient(to right, #FF0000, #FF8B00, #FFF800, #00FFC8, #005CFF, #7900FF, #FF00E5)"
}

const Tiles = {
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "repeat(4, 1fr)"
}

const Tile1 = {
    gridColumn: "1",
    gridRow: "1"
}

const Tile2 = {
    gridColumn: "2",
    gridRow: "1"
}

const Tile3 = {
    gridColumn: "3",
    gridRow: "1"
}

const Tile4 = {
    gridColumn: "4",
    gridRow: "1"
}

const Tile5 = {
    gridColumn: "1",
    gridRow: "2"
}

const Tile6 = {
    gridColumn: "2",
    gridRow: "2"
}

const Tile7 = {
    gridColumn: "3",
    gridRow: "2"
}

const Tile8 = {
    gridColumn: "4",
    gridRow: "2"
}

const Tile9 = {
    gridColumn: "1",
    gridRow: "3"
}

const Tile10 = {
    gridColumn: "2",
    gridRow: "3"
}

const DribbbleCard = {
    gridColumn: "3/5",
    gridRow: "3"
}

class Projects extends React.Component {
    render() {
      const Main = {
        width: "100%"
      }

      return (
        <div style={Main}>
            <div style={Container}>
                <div style={Title}>Visual Exploration</div>
                <div style={Rainbow}/>
                <div style={Tiles}>
                    <Tile style={Tile1} image={vis1} link="https://dribbble.com/shots/3545924-Daily-UI-002-Credit-Card-Checkout"/>
                    <Tile style={Tile2} image={vis2} link="https://dribbble.com/shots/3554056-Daily-UI-006-User-Profile"/>
                    <Tile style={Tile3} image={vis3} link="https://dribbble.com/shots/3551667-Daily-UI-005-App-Icon"/>
                    <Tile style={Tile4} image={vis4} link="https://dribbble.com/shots/3570679-Daily-UI-012-E-Commerce-Shop"/>
                    <Tile style={Tile5} image={vis5} link="https://dribbble.com/shots/3573310-Daily-UI-014-Countdown-Timer"/>
                    <Tile style={Tile6} image={vis6} link="https://dribbble.com/shots/3574945-Daily-UI-015-On-Off-Switch"/>
                    <Tile style={Tile7} image={vis7} link="https://dribbble.com/shots/3611934-Daily-UI-024-Boarding-Pass"/>
                    <Tile style={Tile8} image={vis8} link="https://dribbble.com/shots/4289943-Daily-UI-032-Crowdfunding-Campaign"/>
                    <Tile style={Tile9} image={vis9} link="https://dribbble.com/shots/4803888-Daily-UI-036-Special-Offer"/>
                    <Tile style={Tile10} image={vis10} link="https://dribbble.com/shots/4305986-Daily-UI-033-Customize-Product"/>
                    <Card style={DribbbleCard} description="See all on" title="Dribbble" background={hero} link="https://dribbble.com/ZachShea"/>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;
  
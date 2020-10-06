import React from 'react';
import Size from '../Size.js';
import Tile from "./Tile.js"
import Card from "./Card.js"
import vis1 from "../assets/visuals/vis1.jpg"
import vis2 from "../assets/visuals/vis2.jpg"
import vis3 from "../assets/visuals/vis3.jpg"
import vis4 from "../assets/visuals/vis4.jpg"
import vis5 from "../assets/visuals/vis5.jpg"
import vis6 from "../assets/visuals/vis6.jpg"
import vis7 from "../assets/visuals/vis7.jpg"
import vis8 from "../assets/visuals/vis8.jpg"
import vis9 from "../assets/visuals/vis9.jpg"
import vis10 from "../assets/visuals/vis10.jpg"
import hero from "../assets/visuals/hero-dribbble.jpg"

const ContainerDesktop = {
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "130px 100px 130px 100px"
}

const ContainerDefault = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "80px 30px 80px 30px",
}

const TitleDesktop = {
    fontSize: "50px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "50px",
    color: "white"
}

const TitleDefault = {
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "20px",
    color: "white"
}

const TilesDesktop = {
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "repeat(4, 1fr)"
}

const TilesTablet = {
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "repeat(3, 1fr)"
}

const TilesMobile = {
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "1fr"
}

class Projects extends React.Component {
    render() {
        const Main = {
            width: "100%"
        }

        return (
            <div style={Main} id="visuals">
                <Size.Desktop>
                    <div style={ContainerDesktop}>
                        <div style={TitleDesktop}>Visual Exploration</div>
                        <div style={TilesDesktop}>
                            <Tile style={{gridRow: "1", gridColumn: "1"}} image={vis1} link="https://dribbble.com/shots/3545924-Daily-UI-002-Credit-Card-Checkout"/>
                            <Tile style={{gridRow: "1", gridColumn: "2"}} image={vis2} link="https://dribbble.com/shots/3611576-Daily-UI-022-Search"/>
                            <Tile style={{gridRow: "1", gridColumn: "3"}} image={vis3} link="https://dribbble.com/shots/3551667-Daily-UI-005-App-Icon"/>
                            <Tile style={{gridRow: "1", gridColumn: "4"}} image={vis4} link="https://dribbble.com/shots/3570679-Daily-UI-012-E-Commerce-Shop"/>
                            <Tile style={{gridRow: "2", gridColumn: "1"}} image={vis5} link="https://dribbble.com/shots/3573310-Daily-UI-014-Countdown-Timer"/>
                            <Tile style={{gridRow: "2", gridColumn: "2"}} image={vis6} link="https://dribbble.com/shots/3574945-Daily-UI-015-On-Off-Switch"/>
                            <Tile style={{gridRow: "2", gridColumn: "3"}} image={vis7} link="https://dribbble.com/shots/3611934-Daily-UI-024-Boarding-Pass"/>
                            <Tile style={{gridRow: "2", gridColumn: "4"}} image={vis8} link="https://dribbble.com/shots/4289943-Daily-UI-032-Crowdfunding-Campaign"/>
                            <Tile style={{gridRow: "3", gridColumn: "1"}} image={vis9} link="https://dribbble.com/shots/3611562-Daily-UI-021-Home-Monitoring-Dashboard"/>
                            <Tile style={{gridRow: "3", gridColumn: "2"}} image={vis10} link="https://dribbble.com/shots/4305986-Daily-UI-033-Customize-Product"/>
                            <Card style={{gridRow: "3", gridColumn: "3/5"}} description="See more on" title="Dribbble" background={hero} link="https://dribbble.com/ZachShea" flexibleHeight={true}/>
                        </div>
                    </div>
                </Size.Desktop>
                <Size.Tablet>
                    <div style={ContainerDefault}>
                        <div style={TitleDefault}>Visual Exploration</div>
                        <div style={TilesTablet}>
                            <Tile style={{gridRow: "1", gridColumn: "1"}} image={vis1} link="https://dribbble.com/shots/3545924-Daily-UI-002-Credit-Card-Checkout"/>
                            <Tile style={{gridRow: "1", gridColumn: "2"}} image={vis2} link="https://dribbble.com/shots/3611576-Daily-UI-022-Search"/>
                            <Tile style={{gridRow: "1", gridColumn: "3"}} image={vis3} link="https://dribbble.com/shots/3551667-Daily-UI-005-App-Icon"/>
                            <Tile style={{gridRow: "2", gridColumn: "1"}} image={vis4} link="https://dribbble.com/shots/3570679-Daily-UI-012-E-Commerce-Shop"/>
                            <Tile style={{gridRow: "2", gridColumn: "2"}} image={vis5} link="https://dribbble.com/shots/3573310-Daily-UI-014-Countdown-Timer"/>
                            <Tile style={{gridRow: "2", gridColumn: "3"}} image={vis6} link="https://dribbble.com/shots/3574945-Daily-UI-015-On-Off-Switch"/>
                            <Tile style={{gridRow: "3", gridColumn: "1"}} image={vis7} link="https://dribbble.com/shots/3611934-Daily-UI-024-Boarding-Pass"/>
                            <Tile style={{gridRow: "3", gridColumn: "2"}} image={vis8} link="https://dribbble.com/shots/4289943-Daily-UI-032-Crowdfunding-Campaign"/>
                            <Tile style={{gridRow: "3", gridColumn: "3"}} image={vis9} link="https://dribbble.com/shots/3611562-Daily-UI-021-Home-Monitoring-Dashboard"/>
                            <Tile style={{gridRow: "4", gridColumn: "1"}} image={vis10} link="https://dribbble.com/shots/4305986-Daily-UI-033-Customize-Product"/>
                            <Card style={{gridRow: "4", gridColumn: "2/4"}} description="See more on" title="Dribbble" background={hero} link="https://dribbble.com/ZachShea" flexibleHeight={true}/>
                        </div>
                    </div>
                </Size.Tablet>
                <Size.Mobile>
                    <div style={ContainerDefault}>
                        <div style={TitleDefault}>Visual Exploration</div>
                        <div style={TilesMobile}>
                            <Tile style={{gridRow: "1", gridColumn: "1"}} image={vis1} link="https://dribbble.com/shots/3545924-Daily-UI-002-Credit-Card-Checkout"/>
                            <Tile style={{gridRow: "1", gridColumn: "2"}} image={vis2} link="https://dribbble.com/shots/3611576-Daily-UI-022-Search"/>
                            <Tile style={{gridRow: "2", gridColumn: "1"}} image={vis3} link="https://dribbble.com/shots/3551667-Daily-UI-005-App-Icon"/>
                            <Tile style={{gridRow: "2", gridColumn: "2"}} image={vis4} link="https://dribbble.com/shots/3570679-Daily-UI-012-E-Commerce-Shop"/>
                            <Tile style={{gridRow: "3", gridColumn: "1"}} image={vis5} link="https://dribbble.com/shots/3573310-Daily-UI-014-Countdown-Timer"/>
                            <Tile style={{gridRow: "3", gridColumn: "2"}} image={vis6} link="https://dribbble.com/shots/3574945-Daily-UI-015-On-Off-Switch"/>
                            <Tile style={{gridRow: "4", gridColumn: "1"}} image={vis7} link="https://dribbble.com/shots/3611934-Daily-UI-024-Boarding-Pass"/>
                            <Tile style={{gridRow: "4", gridColumn: "2"}} image={vis8} link="https://dribbble.com/shots/4289943-Daily-UI-032-Crowdfunding-Campaign"/>
                            <Tile style={{gridRow: "5", gridColumn: "1"}} image={vis9} link="https://dribbble.com/shots/3611562-Daily-UI-021-Home-Monitoring-Dashboard"/>
                            <Tile style={{gridRow: "5", gridColumn: "2"}} image={vis10} link="https://dribbble.com/shots/4305986-Daily-UI-033-Customize-Product"/>
                            <Card style={{gridRow: "6", gridColumn: "1/3"}} description="See more on" title="Dribbble" background={hero} link="https://dribbble.com/ZachShea" flexibleHeight={true}/>
                        </div>
                    </div>
                </Size.Mobile>
            </div>
        );
    }
}

export default Projects;

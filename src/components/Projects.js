import React from 'react';
import Card from './Card.js';
import zuke from "../assets/hero-zuke.png"
import medi from "../assets/hero-medi.png"
import hdg from "../assets/hero-hdg.png"
import carebit from "../assets/hero-carebit.png"
import projects from "../assets/hero-projects.png"

const Container = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "100px"
}

const Title = {
  fontSize: "50px",
  fontWeight: "700",
  letterSpacing: "1px",
  marginBottom: "50px",
  color: "black"
}

const Cards = {
    display: "grid",
    gridGap: "60px",
    gridTemplateColumns: "repeat(2, 1fr)"
}

const Card1 = {
    gridColumn: "1",
    gridRow: "1/3"
}

const Card2 = {
    gridColumn: "2",
    gridRow: "1"
}

const Card3 = {
    gridColumn: "2",
    gridRow: "2"
}

const Card4 = {
    gridColumn: "1",
    gridRow: "3"
}

const Card5 = {
    gridColumn: "2",
    gridRow: "3"
}

class Projects extends React.Component {
    render() {
      const Main = {
        marginTop: "-30px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "30px"
      }

      return (
        <div style={Main}>
            <div style={Container}>
                <div style={Title}>Projects</div>
                <div style={Cards}>
                    <Card style={Card1} description="The Music Network" title="Zuke Music" background={zuke} link="https://zukemusic.com"/>
                    <Card style={Card2} description="Monitor Smarter ™" title="Medi-IoT" background={medi} link="https://bostechusa.com/medi-iot.html"/>
                    <Card style={Card3} description="Artist Portfolio Website" title="Hoekstra Design Group" background={hdg} link="http://www.hoekstradesigngroup.com"/>
                    <Card style={Card4} description="Informal, Remote Caregiving" title="Coming Soon" background={carebit}/>
                    <Card style={Card5} description="More Projects" title="Coming Soon" background={projects}/>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;
  
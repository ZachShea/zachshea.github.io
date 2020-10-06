import React from 'react';
import Size from '../Size.js';
import Card from './Card.js';
import heroZuke from "../assets/heros/hero-zuke.jpg"
import heroMedi from "../assets/heros/hero-medi.jpg"
import heroHDG from "../assets/heros/hero-hdg.jpg"
import heroCarebit from "../assets/heros/hero-carebit.jpg"
import heroProjects from "../assets/heros/hero-projects.jpg"
import iconZuke from "../assets/icons/icon-zuke.svg"
import iconMedi from "../assets/icons/icon-medi.svg"
import iconCarebit from "../assets/icons/icon-carebit.svg"
import iconProjects from "../assets/icons/icon-projects.svg"

const ContainerDesktop = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "100px"
}

const ContainerDefault = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "50px 30px 50px 30px",
}

const TitleDesktop = {
  fontSize: "50px",
  fontWeight: "700",
  letterSpacing: "1px",
  marginBottom: "50px",
  color: "black"
}

const TitleDefault = {
  fontSize: "30px",
  fontWeight: "700",
  letterSpacing: "1px",
  marginBottom: "20px",
  color: "black"
}

const CardsDesktop = {
    display: "grid",
    gridGap: "60px",
    gridTemplateColumns: "repeat(2, 1fr)"
}

const CardsDefault = {
    display: "grid",
    gridGap: "20px",
}

const Card1Desktop = {
    gridColumn: "1",
    gridRow: "1/3"
}

const Card1Default = {
    paddingTop: "100px",
    paddingBottom: "100px"
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
      const MainDesktop = {
        marginTop: "-30px",
        marginBottom: "-30px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "30px"
      }

      const MainDefault = {
        marginTop: "-20px",
        marginBottom: "-20px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px"
      }

      return (
        <div>
            <Size.Desktop>
                <div style={MainDesktop} id="projects">
                    <div style={ContainerDesktop}>
                        <div style={TitleDesktop}>Projects</div>
                        <div style={CardsDesktop}>
                            <Card style={Card1Desktop} description="The Music Network" title="Zuke Music" background={heroZuke} icon={iconZuke} link="/zuke-music" openNewWindow={false}/>
                            <Card style={Card2} description="Remote Informal Caregiving" title="Carebit" background={heroCarebit} icon={iconCarebit} link="/carebit" openNewWindow={false}/>
                            <Card style={Card3} description="Monitor Smarter ™" title="Medi-IoT" background={heroMedi} icon={iconMedi} link="https://www.bostechusa.com/solutions"/>
                            <Card style={Card4} description="Artist Portfolio Website" title="Hoekstra Design Group" background={heroHDG} link="http://www.hoekstradesigngroup.com"/>
                            <Card disabled style={Card5} description="More Projects" title="Coming Soon" background={heroProjects} icon={iconProjects}/>
                        </div>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={MainDefault} id="projects">
                    <div style={ContainerDefault}>
                        <div style={TitleDefault}>Projects</div>
                        <div style={CardsDefault}>
                            <Card style={Card1Default} description="The Music Network" title="Zuke Music" background={heroZuke} icon={iconZuke} link="/zuke-music" openNewWindow={false}/>
                            <Card description="Remote Informal Caregiving" title="Carebit" background={heroCarebit} icon={iconCarebit} link="/carebit" openNewWindow={false}/>
                            <Card description="Monitor Smarter ™" title="Medi-IoT" background={heroMedi} icon={iconMedi} link="https://www.bostechusa.com/solutions"/>
                            <Card description="Artist Portfolio Website" title="Hoekstra Design Group" background={heroHDG} link="http://www.hoekstradesigngroup.com"/>
                            <Card disabled description="More Projects" title="Coming Soon" background={heroProjects} icon={iconProjects}/>
                        </div>
                    </div>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default Projects;
  
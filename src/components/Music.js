import React from 'react';
import Size from '../Size.js';
import Card from './Card.js';
import heroTrack from "../assets/heros/hero-track.jpeg"
import heroSoundCloud from "../assets/heros/hero-soundcloud.jpg"
import iconTrack from "../assets/icons/icon-track.svg"
import iconSoundCloud from "../assets/icons/icon-soundcloud.svg"

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
    gridTemplateColumns: "repeat(3, 1fr)"
}

const CardsDefault = {
    display: "grid",
    gridGap: "20px"
}

class Music extends React.Component {
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
            <div style={MainDesktop} id="music">
              <div style={ContainerDesktop}>
                <div style={TitleDesktop}>Have a Listen</div>
                <div style={CardsDesktop}>
                  <Card style={{gridRow: "1", gridColumn: "1/3"}} square description="Cruso" title="Showers" background={heroTrack} icon={iconTrack} link="https://soundcloud.com/zach-shea/showers"/>
                  <Card style={{gridRow: "1", gridColumn: "3"}} description="Hear more on" title="SoundCloud" background={heroSoundCloud} icon={iconSoundCloud} link="https://soundcloud.com/zach-shea/tracks"/>
                </div>
              </div>
            </div>
          </Size.Desktop>
          <Size.Default>
            <div style={MainDefault} id="music">
              <div style={ContainerDefault}>
                <div style={TitleDefault}>Have a Listen</div>
                <div style={CardsDefault}>
                  <Card style={{gridRow: "1", gridColumn: "1"}} square description="Cruso" title="Showers" background={heroTrack} icon={iconTrack} link="https://soundcloud.com/zach-shea/showers"/>
                  <Card style={{gridRow: "2", gridColumn: "1"}} description="Hear more on" title="SoundCloud" background={heroSoundCloud} icon={iconSoundCloud} link="https://soundcloud.com/zach-shea/tracks"/>
                </div>
              </div>
            </div>
          </Size.Default>
        </div>
      );
    }
  }
  
  export default Music;
  
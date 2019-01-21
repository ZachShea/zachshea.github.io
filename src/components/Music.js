import React from 'react';
import Card from './Card.js';
import heroTrack from "../assets/heros/hero-track.jpeg"
import heroSoundCloud from "../assets/heros/hero-soundcloud.png"
import iconTrack from "../assets/icons/icon-track.svg"
import iconSoundCloud from "../assets/icons/icon-soundcloud.svg"

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
    display: "flex"
}

const TrackCard = {
    height: "600px",
    minWidth: "600px",
    marginRight: "60px"
}

const SoundCloudCard = {
    height: "600px",
    width: "420px"
}

class Music extends React.Component {
    render() {
      const Main = {
        marginTop: "-30px",
        marginBottom: "-30px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "30px"
      }

      return (
        <div style={Main} id="music">
            <div style={Container}>
                <div style={Title}>Have a Listen</div>
                <div className="CardsList" style={Cards}>
                    <Card style={TrackCard} description="Cruso" title="Showers" background={heroTrack} icon={iconTrack} link="https://soundcloud.com/zach-shea/showers"/>
                    <Card style={SoundCloudCard} description="Hear all on" title="SoundCloud" background={heroSoundCloud} icon={iconSoundCloud} link="https://soundcloud.com/zach-shea"/>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Music;
  
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Size from '../Size.js';
import ExternalLink from './ExternalLink.js';


function ProductMaker() {
  return (<div>
      Back in eighth grade, a friend of mine came to me with an idea for an iPhone app. I didn’t know anything about designing apps or writing code, but I decided to give it a go. This set me on a path to creating numerous apps over my high school career, as well as studying and applying UX design principles. In my senior year, my teammate and I placed fourth in the Mobile Application Development category for the <ExternalLink text="FBLA" url="https://www.fbla-pbl.org"/> national competition.<br/><br/>
      Shortly after starting classes at the University of Central Florida, I began cofounding a startup called Zuke Music. For almost a year, I helped to conduct customer interviews, determine product-market fit, and design mockups and interactive prototypes for the app. We continued to iterate as we conducted user studies and developed our business model. I began writing the code for the iOS app, and Zuke launched March 2017.<br/><br/>
      Since then, I’ve worked to add value to the Zuke app, designing and coding new features. I’ve continued to study and put my UI and UX design skills into <ExternalLink text="practice" url="https://dribbble.com/ZachShea"/>, working on multiple <HashLink to="/#projects">projects</HashLink> for different classes at UCF. Plus, I’m working as the sole UI/UX designer at <ExternalLink text="B.O.S. Technology" url="https://bostechusa.com"/>, strengthening my experience designing web apps and collaborating with larger teams.
  </div>);
}

function Musician() {
  return (<div>
      Due to growing up in a musical family, music has pervaded my life since I was born. I sang in chorus and choir from early childhood until middle school. I began hand drumming in fourth grade and learned snare drum techniques in sixth grade. In seventh and eighth grade, I joined the middle school concert band as a percussionist and took piano lessons. I went on to learn guitar in ninth grade, and bass guitar that summer.<br/><br/>
      I played drums for Sunday mass at my church throughout middle school and switched to playing bass in the band throughout high school. I joined as the drummer of an alternative/punk rock band in high school, as well.<br/><br/>
      Entering college at UCF, I joined <ExternalLink text="Catholic Campus Ministry" url="http://ccmknights.com"/>, played bass in the Praise Band for a year, and played drums the year after. In my junior year, I served as one of two cochairs for the Praise Committee, switched to guitar and vocals, and led one of the music teams that played for Sunday masses. Now in my senior year, I continue to serve and lead within the praise ministry and band.<br/><br/>
      Although I love playing physical instruments, I am fascinated with creating <ExternalLink text="digital compositions" url="https://soundcloud.com/zach-shea/tracks"/>. When I have the time, I put on my headphones and dive into the world of electronic music, crafting rich chords and emotive melodies.
  </div>);
}

function Contact() {
  return (<div>
      If you’d like to get ahold of me, shoot me an email at <a href="mailto:zacharyshea@icloud.com">zacharyshea@icloud.com</a>.<br/><br/>
  </div>);
}


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

const BodyDesktop = {
  fontSize: "30px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "black"
}

const BodyDefault = {
  fontSize: "20px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "black"
}

const SpacerDesktop = {
    height: "100px"
}

const SpacerDefault = {
    height: "50px"
}

class MeContent extends React.Component {
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
                <div style={MainDesktop}>
                    <div style={ContainerDesktop}>
                        <div style={TitleDesktop}>Product Maker</div>
                        <div style={BodyDesktop}><ProductMaker/></div>
                        <div style={SpacerDesktop}/>
                        <div style={TitleDesktop}>Musician</div>
                        <div style={BodyDesktop}><Musician/></div>
                        <br/><br/><br/><br/><br/><br/>
                        <div style={BodyDesktop}><Contact/></div>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={MainDefault}>
                    <div style={ContainerDefault}>
                        <div style={TitleDefault}>Product Maker</div>
                        <div style={BodyDefault}><ProductMaker/></div>
                        <div style={SpacerDefault}/>
                        <div style={TitleDefault}>Musician</div>
                        <div style={BodyDefault}><Musician/></div>
                        <br/><br/><br/><br/>
                        <div style={BodyDefault}><Contact/></div>
                    </div>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default MeContent;
  
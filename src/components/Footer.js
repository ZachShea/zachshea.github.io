import React from 'react';
import dribbble from '../assets/icons/social-dribbble.svg';
import instagram from '../assets/icons/social-instagram.svg';
import twitter from '../assets/icons/social-twitter.svg';
import github from '../assets/icons/social-github.svg';
import linkedin from '../assets/icons/social-linkedin.svg';
import soundcloud from '../assets/icons/social-soundcloud.svg';
import youtube from '../assets/icons/social-youtube.svg';

const Container = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "130px 100px 70px 100px"
}

const Socials = {
    marginBottom: "60px",
    display: "flex",
    alignItems: "center"
}

const SocialIcon = {
    marginRight: "50px"
}

const Copyright = {
  fontSize: "20px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "rgba(255,255,255,0.6)"
}

class Footer extends React.Component {
    render() {
      const Main = {
        width: "100%"
      }

      return (
        <div style={Main}>
            <div style={Container}>
                <div style={Socials}>
                    <a style={SocialIcon} href="https://dribbble.com/ZachShea" target="_blank"><img src={dribbble}/></a>
                    <a style={SocialIcon} href="https://www.instagram.com/shea_zach/" target="_blank"><img src={instagram}/></a>
                    <a style={SocialIcon} href="https://twitter.com/ZachShea" target="_blank"><img src={twitter}/></a>
                    <a style={SocialIcon} href="https://github.com/ZachShea" target="_blank"><img src={github}/></a>
                    <a style={SocialIcon} href="https://www.linkedin.com/in/ZachShea" target="_blank"><img src={linkedin}/></a>
                    <a style={SocialIcon} href="https://soundcloud.com/zach-shea" target="_blank"><img src={soundcloud}/></a>
                    <a style={SocialIcon} href="https://www.youtube.com/channel/UCn9JCFB_Awk-z9suVHT8cWg" target="_blank"><img src={youtube}/></a>
                </div>
                <div style={Copyright}>© 2019 Zachary Shea.  All rights reserved.</div>
            </div>
        </div>
      );
    }
  }
  
  export default Footer;
  
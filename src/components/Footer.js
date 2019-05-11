import React from 'react';
import Size from '../Size.js'
import dribbble from '../assets/icons/social-dribbble.svg';
import instagram from '../assets/icons/social-instagram.svg';
import twitter from '../assets/icons/social-twitter.svg';
import github from '../assets/icons/social-github.svg';
import linkedin from '../assets/icons/social-linkedin.svg';
import soundcloud from '../assets/icons/social-soundcloud.svg';
import email from '../assets/icons/social-email.svg';

const Main = {
  width: "100%"
}

const ContainerDesktop = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "90px 100px 70px 100px"
}

const ContainerDefault = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "40px 0px 50px 30px"
}

const Socials = {
    marginBottom: "50px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
}

const SocialIconDesktop = {
    marginRight: "50px",
    marginTop: "40px"
}

const SocialIconDefault = {
    marginRight: "40px",
    marginTop: "40px"
}

const CopyrightDesktop = {
  fontSize: "17px",
  fontWeight: "500",
  letterSpacing: "1px",
  color: "rgba(255,255,255,0.5)"
}

const CopyrightDefault = {
  fontSize: "15px",
  fontWeight: "500",
  color: "rgba(255,255,255,0.5)"
}

class Footer extends React.Component {
    render() {
      let t = "_blank"
      let r = "noopener noreferrer"

      return (
        <div style={Main}>
          <Size.Desktop>
            <div style={ContainerDesktop}>
                <div style={Socials}>
                    <a style={SocialIconDesktop} href="https://dribbble.com/ZachShea"           target={t} rel={r}><img src={dribbble}    alt="Dribbble"/></a>
                    <a style={SocialIconDesktop} href="https://www.instagram.com/shea_zach/"    target={t} rel={r}><img src={instagram}   alt="Instagram"/></a>
                    <a style={SocialIconDesktop} href="https://twitter.com/ZachShea"            target={t} rel={r}><img src={twitter}     alt="Twitter"/></a>
                    <a style={SocialIconDesktop} href="https://github.com/ZachShea"             target={t} rel={r}><img src={github}      alt="GitHub"/></a>
                    <a style={SocialIconDesktop} href="https://www.linkedin.com/in/ZachShea"    target={t} rel={r}><img src={linkedin}    alt="LinkedIn"/></a>
                    <a style={SocialIconDesktop} href="https://soundcloud.com/zach-shea/tracks" target={t} rel={r}><img src={soundcloud}  alt="SoundCloud"/></a>
                    <a style={SocialIconDesktop} href="mailto:zacharyshea@icloud.com"><img src={email} alt="Email"/></a>
                </div>
                <div style={CopyrightDesktop}>© 2019 Zachary Shea.  All rights reserved.</div>
            </div>
          </Size.Desktop>
          <Size.Default>
            <div style={ContainerDefault}>
                <div style={Socials}>
                    <a style={SocialIconDefault} href="https://dribbble.com/ZachShea"           target={t} rel={r}><img src={dribbble}    alt="Dribbble"/></a>
                    <a style={SocialIconDefault} href="https://www.instagram.com/shea_zach/"    target={t} rel={r}><img src={instagram}   alt="Instagram"/></a>
                    <a style={SocialIconDefault} href="https://twitter.com/ZachShea"            target={t} rel={r}><img src={twitter}     alt="Twitter"/></a>
                    <a style={SocialIconDefault} href="https://github.com/ZachShea"             target={t} rel={r}><img src={github}      alt="GitHub"/></a>
                    <a style={SocialIconDefault} href="https://www.linkedin.com/in/ZachShea"    target={t} rel={r}><img src={linkedin}    alt="LinkedIn"/></a>
                    <a style={SocialIconDefault} href="https://soundcloud.com/zach-shea/tracks" target={t} rel={r}><img src={soundcloud}  alt="SoundCloud"/></a>
                    <a style={SocialIconDefault} href="mailto:zacharyshea@icloud.com"><img src={email} alt="Email"/></a>
                </div>
                <div style={CopyrightDefault}>© 2019 Zachary Shea.  All rights reserved.</div>
            </div>
          </Size.Default>
        </div>
      );
    }
  }
  
  export default Footer;
  
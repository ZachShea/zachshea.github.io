import React from 'react';
import Size from '../../Size.js';
import MyRetinaImage from '../../components/MyRetinaImage.js'
import ProjectPage from './ProjectPage.js';
import TitleBodyItem from '../../components/body/TitleBodyItem.js';
import NormalBodyItem from '../../components/body/NormalBodyItem.js';
import QuoteBodyItem from '../../components/body/QuoteBodyItem.js';
import SpacerBodyItem from '../../components/body/SpacerBodyItem.js';

import icon from "../../assets/icons/icon-zuke.svg"
import heroImage from '../../assets/heros/hero-zuke.png'
import ssLogo from '../../assets/images/logo-ss.svg'
import ssLogoSmall from '../../assets/images/logo-ss-small.svg'

let icorpsLogo = 'logo-icorps.png'
let icorpsLogoSmall = 'logo-icorps-small.png'

const ImagesContainer = {
    textAlign: "center"
}

const Images = {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}

const ImageLarge = {
    display: "inline-block-flex",
    margin: "30px 50px 30px 50px"
}

const ImageMobile = {
    display: "inline-block-flex",
    margin: "15px 25px 15px 25px"
}

const ICorpsTiny = {
    display: "inline-block-flex",
    margin: "15px 0 15px 0"
}

const SSTiny = {
    display: "inline-block-flex",
    margin: "15px 0 15px 0",
    width: "100%"
}

class ZukeProjectPage extends React.Component {
    render() { 
        let icorpsLink = "https://icorps.cie.ucf.edu"
        let ssLink = "https://www.starterstudio.org"

        let t = "_blank"
        let r = "noopener noreferrer"

        return <ProjectPage 
            description="The Music Network" 
            title="Zuke Music" 
            icon={icon} 
            heroImage={heroImage}
            client={{
                name: "Zuke Music, Inc.", 
                link: "https://zukemusic.com"
            }}
            product={{
                name: "Zuke Music for iOS", 
                link: "https://itunes.apple.com/us/app/zuke-music/id1136042367"
            }}
            roles={<div>
                Co-founder<br/>
                Product Designer<br/>
                iOS Developer
            </div>}
            content={<div>
                <TitleBodyItem content="Client"/>
                <NormalBodyItem content="Zuke Music, Inc. is a startup founded by Arielle Cohen and I in October 2015. The company’s product, Zuke Music, is an iOS application that allows those involved in the music industry to network and collaborate with one another."/>
                <QuoteBodyItem content="At Zuke Music, our goal is to help people in the music industry connect with music pros to take their careers to the next level and create the ultimate music collaborations."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Role"/>
                <NormalBodyItem content="I took on many roles in this project. Since Arielle and I cofounded the company, we worked together to generate ideas and develop our business model. We took Zuke Music through the I-Corps program at the University of Central Florida, and then through the Starter Studio business accelerator program in downtown Orlando."/>
                <SpacerBodyItem/>
                <div style={ImagesContainer}>
                    <div style={Images}>
                        <Size.Large>
                            <a href={icorpsLink} target={t} rel={r} style={ImageLarge}><MyRetinaImage name={icorpsLogo} /></a>
                            <a href={ssLink} target={t} rel={r} style={ImageLarge}><img src={ssLogo} alt="Starter Studio"/></a>
                        </Size.Large>
                        <Size.Small>
                            <a href={icorpsLink} target={t} rel={r} style={ImageMobile}><MyRetinaImage name={icorpsLogoSmall} /></a>
                            <a href={ssLink} target={t} rel={r} style={ImageMobile}><img src={ssLogoSmall} alt="Starter Studio"/></a>
                        </Size.Small>
                        <Size.Tiny>
                            <a href={icorpsLink} target={t} rel={r} style={ICorpsTiny}><MyRetinaImage name={icorpsLogoSmall} /></a>
                            <a href={ssLink} target={t} rel={r}><img style={SSTiny} src={ssLogoSmall} alt="Starter Studio"/></a>
                        </Size.Tiny>
                    </div>
                </div>
                <SpacerBodyItem/>
                <NormalBodyItem content="I also led the design and development of the iOS app. During the development of our business, I created wireframes, mockups, and interactive prototypes. After many iterations and customer interviews later, as our business model became more solidified, I put on my developer hat and began writing Swift code. I worked with our backend guru, Brandon Ashley, to turn user flows into requirements for our database and RESTful API, which the iOS app now calls."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Goal"/>
                <NormalBodyItem content="As we were still deciding on the direction for our business, Arielle and I found that networking opportunities for amateur musicians were slim, and it was difficult for new artists to find people to collaborate with. We created Zuke Music to solve these problems, and as we received feedback from our users, continued to design and implement features to address additional music industry pain points."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Experience"/>
                <NormalBodyItem content={<div>
                    This was the first project I worked on that had such a lengthy and intensive design phase. In previous projects, much of the design was completed quickly and without any sort of user testing, since I was eager to begin development and deadlines were coming up. However, the design phase for Zuke lasted around eight months before beginning development, and resulted in around 90 mocked-up screens.<br/><br/>
                    Because we were still developing our business model and collecting customer feedback, we pivoted multiple times within these eight months, resulting in multiple redesigns of the application. However, each time we reimagined the Zuke app, we were more satisfied with the direction that was taken. We finally began development in Summer 2016.<br/><br/>
                    Zuke was also the largest project I’ve worked on in terms of the amount of code. Imagine one frontend and one backend developer turning around 90 screens into a functional app. It took almost 10 months to complete the project, and Zuke finally launched March 2017.
                </div>}/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Outcome"/>
                <NormalBodyItem content={<div>
                    From working on Zuke, I’ve learned an extraordinary amount about developing business models, establishing product-market fit, user experience and interface design, iOS app development, and working with RESTful APIs. I’ve also seen an increase in my proficiency when designing digital products and writing code.<br/><br/>
                    However, I’ve also learned the importance of an MVP and avoiding feature creep. Zuke was a huge app for one designer and a two person dev team to take on. It was very tempting to build everything all at once and release a fully-featured app from the start, but it resulted in delaying our release date, and therefore delaying the feedback we would receive from our users. I believe it would have been more beneficial to start small, with a couple of key features that persisted through the design phase into development.<br/><br/>
                    In the end, we created a product that we believe is helpful to many people looking for connections and collaborations in the music industry, and we’ve continued to push out new features to add value to the app, given feedback from our users.
                </div>}/>
            </div>}
        />
    }
}

export default ZukeProjectPage;
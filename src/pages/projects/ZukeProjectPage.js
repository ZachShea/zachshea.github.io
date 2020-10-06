import React from 'react';
import Size from '../../Size.js';
import ExternalLink from '../../components/ExternalLink.js';
import MyRetinaImage from '../../components/MyRetinaImage.js'

import ProjectPage from './ProjectPage.js';
import TitleBodyItem from '../../components/body/TitleBodyItem.js';
import NormalBodyItem from '../../components/body/NormalBodyItem.js';
import QuoteBodyItem from '../../components/body/QuoteBodyItem.js';
import SpacerBodyItem from '../../components/body/SpacerBodyItem.js';

import icon from "../../assets/icons/icon-zuke.svg"
import heroImage from '../../assets/heros/hero-zuke.jpg'
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
                name: "Zuke Music, Inc."
            }}
            product={{
                name: "Zuke Music for iOS"
            }}
            roles={<div>
                Co-founder<br/>
                Product Designer<br/>
                iOS Developer
            </div>}
            content={<div>
                <TitleBodyItem content="Client"/>
                <NormalBodyItem content="Zuke Music, Inc. is a startup founded by Arielle Cohen and I in October 2015. The company’s product, Zuke Music, was an iOS application that allowed those involved in the music industry to network and collaborate with one another."/>
                <QuoteBodyItem content="At Zuke Music, our goal is to help people in the music industry connect with music pros to take their careers to the next level and create the ultimate music collaborations."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Goal"/>
                <NormalBodyItem content="As we were still deciding on the direction for our business, Arielle and I found that networking opportunities for amateur musicians were slim, and it was difficult for new artists to find people to collaborate with. We created Zuke Music to solve these problems, and as we received feedback from our users, continued to design and implement features to address additional music industry pain points."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Role"/>
                <NormalBodyItem content={<div>I took on many roles in this project. Since Arielle and I cofounded the company, we worked together to generate ideas and develop our business model. We took Zuke Music through the <ExternalLink text="I-Corps" url={icorpsLink}/> program at the University of Central Florida, and then through the <ExternalLink text="Starter Studio" url={ssLink}/> business accelerator program in downtown Orlando.</div>}/>
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
                <NormalBodyItem content="I also led the design and development of the iOS app. During the development of our business, I created wireframes, mockups, and interactive prototypes. After many iterations and customer interviews later, as our business model became more solidified, I put on my developer hat and began writing Swift code. I worked with our backend guru, Brandon, to turn user flows into requirements for our database and REST API."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Experience"/>
                <NormalBodyItem content={<div>
                    This was the first project I worked on that had such a lengthy and intensive design phase. In previous projects, much of the design was completed quickly and without any sort of user testing, since I was eager to begin development and deadlines were coming up. However, the design phase for Zuke lasted around eight months before beginning development, and resulted in around 90 mocked-up screens.<br/><br/>
                    Because we were still developing our business model and collecting customer feedback, we pivoted multiple times within these eight months, resulting in multiple redesigns of the application. However, each time we reimagined the Zuke app, we were more satisfied with the direction that was taken. We finally began development in Summer 2016.<br/><br/>
                    Zuke was also the largest project I’ve worked on in terms of the amount of code. One frontend developer (that’s me) and one backend developer had turn 90 different screens into a functional app. It took almost 10 months to complete this project, and at last, Zuke launched in March 2017.
                </div>}/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Outcome"/>
                <NormalBodyItem content={<div>
                    From working on Zuke, I’ve learned an extraordinary amount about developing business models, establishing product-market fit, user experience and interface design, iOS app development, and working with REST APIs. I’ve also seen an increase in my proficiency when designing digital products and writing code.<br/><br/>
                    However, I’ve also learned the importance of an <ExternalLink text="MVP" url="https://en.wikipedia.org/wiki/Minimum_viable_product"/> and avoiding <ExternalLink text="feature creep" url="https://en.wikipedia.org/wiki/Feature_creep"/>. Zuke was a huge app for one designer and two developers to take on. Because of our passion for this project, it was very tempting to build everything all at once and release a fully-featured app from the start. This resulted in delaying our release date, and therefore delaying the feedback we would later receive from our users. It would have been more beneficial to start small, focusing on just a couple of key features, both in the design and development phases.<br/><br/>
                    In the end, we created a product that served about 8,000 users, helping them find connections and collaborations in the music industry. We continued to push out new features to add value to the app, given feedback from our users, and began development of a Zuke Music web app. However, this came to an unfortunate close, as I began to shift my priorities toward graduation and my own personal growth. Without someone to maintain and support the project, Zuke Music is no longer available to the public.<br/><br/>
                    If you would like to be that someone, go ahead and contact me at <a href="mailto:zacharyshea@icloud.com">zacharyshea@icloud.com</a>. I would love for someone to bring this project back and run with it.
                </div>}/>
            </div>}
        />
    }
}

export default ZukeProjectPage;
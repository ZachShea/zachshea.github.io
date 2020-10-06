import React from 'react';
import ExternalLink from '../../components/ExternalLink.js';

import ProjectPage from './ProjectPage.js';
import TitleBodyItem from '../../components/body/TitleBodyItem.js';
import NormalBodyItem from '../../components/body/NormalBodyItem.js';
import QuoteBodyItem from '../../components/body/QuoteBodyItem.js';
import SpacerBodyItem from '../../components/body/SpacerBodyItem.js';

import icon from "../../assets/icons/icon-carebit.svg"
import heroImage from '../../assets/heros/hero-carebit.jpg'

class ZukeProjectPage extends React.Component {
    render() {
        let cscwLink = "https://cscw.acm.org/2019/"
        let acmLink = "https://dl.acm.org/doi/abs/10.1145/3311957.3359511"

        return <ProjectPage 
            description="Remote Informal Caregiving" 
            title="Carebit" 
            icon={icon} 
            heroImage={heroImage}
            client={{
                name: "STIR Lab at UCF", 
                link: "https://stirlab.org"
            }}
            product={{
                name: "Carebit Mobile App", 
                link: "https://dl.acm.org/doi/abs/10.1145/3311957.3359511"
            }}
            roles={<div>
                UI/UX Designer<br/>
                iOS Developer
            </div>}
            content={<div>
                <TitleBodyItem content="Client"/>
                <NormalBodyItem content="The Socio-Technical Interaction Research (STIR) Lab at the University of Central Florida (UCF) specializes in adolescent online safety, social computing, and human-computer interaction (HCI) research."/>
                <QuoteBodyItem content="[We] examine the complex interactions between technology and people and how this interplay affects human behavior and society. Combining computer science, social science, and user-centered design principles, the STIR Lab leverages interdisciplinary approaches to deeply understand users, their needs, and the technologies that can be designed to best meet those needs."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Goal"/>
                <NormalBodyItem content="Prior to my involvement, Carebit was an Android app that allowed caregivers to monitor the health of their loved ones via Fitbit fitness trackers. The purpose of the project was twofold. On one hand, Carebit needed to support the social computing research goals of the lab, and thus needed to be a novel technology to be presented at a major HCI conference. On the other hand, Carebit needed to be a user-centered, fully-featured app for when the time came to bring it to market."/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Role"/>
                <NormalBodyItem content={<div>I was asked to redesign the existing app to be more user-centered, develop an new iOS app, and manage development of the Android app. Both apps would implement the same redesigned interface. I got to work creating wireframes, mockups, and interactive prototypes for both platforms. After a number of iterations, we quickly put together a minimum-viable product (MVP) that we tested with users. After collecting their feedback, we recruited a Senior Design team from UCF to build the fully-featured apps. Finally, we submitted a demo of the apps to the <ExternalLink text="CSCW 2019 conference" url={cscwLink}/>, which was accepted and is now available in the <ExternalLink text="ACM Digial Library" url={acmLink}/>.</div>}/>
                <SpacerBodyItem/>
                <NormalBodyItem content={<i>More information about this project is coming soon</i>}/>
                {/* <TitleBodyItem content="Experience"/>
                <NormalBodyItem content={<div>
                    Coming soon
                </div>}/>
                <SpacerBodyItem/>
                <TitleBodyItem content="Outcome"/>
                <NormalBodyItem content={<div>
                    Coming soon
                </div>}/> */}
            </div>}
        />
    }
}

export default ZukeProjectPage;
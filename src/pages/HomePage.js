import React from 'react';
import HomeHero from '../components/HomeHero.js';
import Projects from '../components/Projects.js';
// import Visuals from '../components/Visuals.js';
// import Music from  '../components/Music.js';

class HomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() { 
        return (<div>
            <HomeHero/>
            <Projects/>
            {/* <Visuals/>
            <Music/> */}
        </div>)
    }
}

export default HomePage;
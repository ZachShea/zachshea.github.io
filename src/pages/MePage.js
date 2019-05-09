import React from 'react';
import Hero from '../components/Hero.js';
import MeContent from '../components/MeContent.js';
import heroImage from '../assets/heros/hero-me.jpg'

class MePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { 
        return (<div>
            <Hero description="Hello, I’m" title="Zach Shea" image={heroImage}/>
            <MeContent/>
        </div>)
    }
}

export default MePage;
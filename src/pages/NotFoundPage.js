import React from 'react';
import NotFoundHero from '../components/NotFoundHero.js';
import heroImage from '../assets/heros/hero-home.jpg'

class NotFoundPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return <NotFoundHero description="404" title="The page you’re looking for couldn’t be found" image={heroImage}/>
    }
}

export default NotFoundPage;
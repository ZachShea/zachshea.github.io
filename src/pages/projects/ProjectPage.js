import React from 'react';
import Hero from '../../components/Hero.js';
import Body from '../../components/body/Body.js';
import ProjectSummary from '../../components/ProjectSummary.js';

class ProjectPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { 
        return (<div>
            <Hero description={this.props.description} title={this.props.title} icon={this.props.icon} image={this.props.heroImage}/>
            <ProjectSummary client={this.props.client} product={this.props.product} roles={this.props.roles} />
            <Body content={this.props.content}/>
        </div>)
    }
}

export default ProjectPage;
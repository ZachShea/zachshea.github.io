import React from 'react';
import Size from '../Size.js';
import ProjectPoint from './ProjectPoint.js';

const ContainerDesktop = {
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "100px 100px 130px 100px",
    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(3, 1fr)"
}

const ContainerDefault = {
    maxWidth: "1080px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "50px 30px 70px 30px",
    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
}

class ProjectSummary extends React.Component {
  render() {
    const MainDesktop = {
        marginTop: "-30px",
        width: "100%",
        backgroundColor: "rgb(242,242,242)",
        borderRadius: "30px 30px 0 0"
    }

    const MainDefault = {
        marginTop: "-20px",
        width: "100%",
        backgroundColor: "rgb(242,242,242)",
        borderRadius: "20px 20px 0 0"
    }

    return (
        <div>
            <Size.Desktop>
                <div style={MainDesktop}>
                    <div style={ContainerDesktop}>
                        <ProjectPoint header="Client" body={this.props.client.name} link={this.props.client.link}/>
                        <ProjectPoint header="Product" body={this.props.product.name} link={this.props.product.link}/>
                        <ProjectPoint header="Roles" body={this.props.roles}/>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={MainDefault}>
                    <div style={ContainerDefault}>
                        <ProjectPoint header="Client" body={this.props.client.name} link={this.props.client.link}/>
                        <ProjectPoint header="Product" body={this.props.product.name} link={this.props.product.link}/>
                        <ProjectPoint header="Roles" body={this.props.roles}/>
                    </div>
                </div>
            </Size.Default>
        </div>
    );
  }
}
  
export default ProjectSummary;
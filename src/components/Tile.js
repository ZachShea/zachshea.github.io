import React from 'react';

class Tile extends React.Component {
    render() {
      const { image = "" } = this.props;
      
      const Main = {
        width: "264px",
        height: "264px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "6px",
        // backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(" + image + ")"
        backgroundImage: "url(" + image + ")"
      }

      return (
        <a style={Object.assign(Main, this.props.style)} href={this.props.link} target="_blank" rel="noopener noreferrer"/>
      );
    }
  }
  
  export default Tile;
  
import React from 'react';
import '../Hoverable.css'

class Tile extends React.Component {
  render() {
    const MainDesktop = {
      width: '100%',
      paddingTop: '100%',
      backgroundPosition: "center", 
      backgroundSize: "cover",
      borderRadius: "6px",
      backgroundImage: "url(" + this.props.image + ")"
    }

    return (
      <a 
        class="HoverOpacity90"
        style={Object.assign(MainDesktop, this.props.style)} 
        href={this.props.link} 
        target="_blank" 
        rel="noopener noreferrer"
      />
    );
  }
}

export default Tile;
  
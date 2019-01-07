import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
    render() {
      const { background = "" } = this.props;

      return (
        <div className="Card" style={{backgroundImage: "url(" + background + ")"}}>
            <div className="Tint"/>
            <div className="Content">
                <div className="Description">{this.props.description}</div>
                <div className="Title">{this.props.title}</div>
                <img className="Icon" src={this.props.icon}/>
            </div>
        </div>
      );
    }
  }
  
  export default Card;
  
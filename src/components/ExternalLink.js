import React from 'react';

class ExternalLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
    );
  }
}
  
export default ExternalLink;
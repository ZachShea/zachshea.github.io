import React from 'react';
import RetinaImage from 'react-retina-image';

class MyRetinaImage extends React.Component {
    render() {
        var src = 'assets/images/' + this.props.name
        var endOfFilename = src.lastIndexOf(".");
        var retinaSrc = src.substring(0, endOfFilename) + "@2x" + src.substring(endOfFilename);

        return (<RetinaImage src={[require('../' + src), require('../' + retinaSrc)]} />);
    }
}

export default MyRetinaImage;
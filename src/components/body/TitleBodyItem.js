import React from 'react';
import Size from '../../Size.js';

const TitleDesktop = {
    fontSize: "50px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "50px",
    color: "black"
}

const TitleDefault = {
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "20px",
    color: "black"
}

class TitleBodyItem extends React.Component {
    render() {
        return (<div>
            <Size.Desktop><div style={TitleDesktop}>{this.props.content}</div></Size.Desktop>
            <Size.Default><div style={TitleDefault}>{this.props.content}</div></Size.Default>
        </div>);
    }
}

export default TitleBodyItem;
import React from 'react';
import Size from '../../Size.js';

const BodyDesktop = {
    fontSize: "30px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "black"
}

const BodyDefault = {
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "black"
}

class NormalBodyItem extends React.Component {
    render() {
        return (<div>
            <Size.Desktop><div style={BodyDesktop}>{this.props.content}</div></Size.Desktop>
            <Size.Default><div style={BodyDefault}>{this.props.content}</div></Size.Default>
        </div>);
    }
}

export default NormalBodyItem;
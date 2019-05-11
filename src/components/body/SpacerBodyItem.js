import React from 'react';
import Size from '../../Size.js';

const SpacerDesktop = {
    height: "100px"
}

const SpacerDefault = {
    height: "50px"
}

class SpacerBodyItem extends React.Component {
    render() {
        return (<div>
            <Size.Desktop><div style={SpacerDesktop}/></Size.Desktop>
            <Size.Default><div style={SpacerDefault}/></Size.Default>
        </div>);
    }
}

export default SpacerBodyItem;
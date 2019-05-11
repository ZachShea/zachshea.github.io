import React from 'react';
import Size from '../../Size.js';
import openQuote from '../../assets/icons/quote-open.svg';
import closeQuote from '../../assets/icons/quote-close.svg';
import openQuoteSmall from '../../assets/icons/quote-open-small.svg';
import closeQuoteSmall from '../../assets/icons/quote-close-small.svg';

const ContainerDesktop = {
    position: "relative",
    marginTop: "60px",
    marginLeft: "80px",
    marginRight: "80px"
}

const ContainerDefault = {
    position: "relative",
    marginTop: "25px",
    marginLeft: "20px",
    marginRight: "20px"
}

const QuoteDesktop = {
    fontFamily: "Merriweather",
    fontSize: "28px",
    fontWeight: "400",
    letterSpacing: ".5px",
    color: "rgba(0,0,0,0.6)",
    fontStyle: "italic",
    padding: "20px 50px 20px 50px"
}

const QuoteDefault = {
    fontFamily: "Merriweather",
    fontSize: "17px",
    fontWeight: "400",
    letterSpacing: ".5px",
    color: "rgba(0,0,0,0.6)",
    fontStyle: "italic",
    padding: "12px 25px 12px 25px"
}

const OpenQuote = {
    position: "absolute"
}

const CloseQuote = {
    position: "absolute",
    bottom: "0",
    right: "0"
}

class QuoteBodyItem extends React.Component {
    render() {
        return (<div>
            <Size.Desktop>               
                <div style={ContainerDesktop}>
                    <img style={OpenQuote} src={openQuote} alt=""/>
                    <div style={QuoteDesktop}>{this.props.content}</div>
                    <img style={CloseQuote} src={closeQuote} alt=""/>
                </div>
            </Size.Desktop>
            <Size.Default>
            <div style={ContainerDefault}>
                    <img style={OpenQuote} src={openQuoteSmall} alt=""/>
                    <div style={QuoteDefault}>{this.props.content}</div>
                    <img style={CloseQuote} src={closeQuoteSmall} alt=""/>
                </div>
            </Size.Default>
        </div>);
    }
}

export default QuoteBodyItem;
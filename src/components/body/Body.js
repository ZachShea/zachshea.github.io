import React from 'react';
import Size from '../../Size.js';

const ContainerDesktop = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "100px"
}

const ContainerDefault = {
  maxWidth: "1080px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "50px 30px 50px 30px",
}

class Body extends React.Component {
    render() {
      const MainDesktop = {
        marginTop: "-30px",
        marginBottom: "-30px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "30px"
      }

      const MainDefault = {
        marginTop: "-20px",
        marginBottom: "-20px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px"
      }

      return (
        <div>
            <Size.Desktop>
                <div style={MainDesktop}>
                    <div style={ContainerDesktop}>
                        {this.props.content}
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={MainDefault}>
                    <div style={ContainerDefault}>
                        {this.props.content}
                    </div>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default Body;
  
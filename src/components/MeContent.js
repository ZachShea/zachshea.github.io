import React from 'react';
import Size from '../Size.js';

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

const SpacerDesktop = {
    height: "100px"
}

const SpacerDefault = {
    height: "50px"
}

class MeContent extends React.Component {
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
                <div style={MainDesktop} id="projects">
                    <div style={ContainerDesktop}>
                        <div style={TitleDesktop}>Product Maker</div>
                        <div style={BodyDesktop}>
                            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.<br/><br/>
                            Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque.<br/><br/>
                            Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.
                        </div>
                        <div style={SpacerDesktop}/>
                        <div style={TitleDesktop}>Musician</div>
                        <div style={BodyDesktop}>
                            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.<br/><br/>
                            Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas.
                        </div>
                    </div>
                </div>
            </Size.Desktop>
            <Size.Default>
                <div style={MainDefault} id="projects">
                    <div style={ContainerDefault}>
                        <div style={TitleDefault}>Product Maker</div>
                        <div style={BodyDefault}>
                            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.<br/><br/>
                            Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque.<br/><br/>
                            Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.
                        </div>
                        <div style={SpacerDefault}/>
                        <div style={TitleDefault}>Musician</div>
                        <div style={BodyDefault}>
                            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.<br/><br/>
                            Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas.
                        </div>
                    </div>
                </div>
            </Size.Default>
        </div>
      );
    }
  }
  
  export default MeContent;
  
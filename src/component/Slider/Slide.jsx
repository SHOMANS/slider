import React from "react";

class Slide extends React.Component {
  render() {
    const { imgSrc, imgAlt } = this.props;
    return <img src={imgSrc} alt={imgAlt} />;
  }
}

export default Slide;

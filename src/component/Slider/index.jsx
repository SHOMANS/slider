import React from "react";
import Slide from "./Slide";
import "./style.css";

class Slider extends React.Component {
  render() {
    return (
      <>
        <Slide imgSrc="http://placehold.it/300/300" />
        <Slide imgSrc="http://placehold.it/300/300" />
        <Slide imgSrc="http://placehold.it/300/300" />
        <Slide imgSrc="http://placehold.it/300/300" />
        <Slide imgSrc="http://placehold.it/300/300" />
      </>
    );
  }
}

export default Slider;

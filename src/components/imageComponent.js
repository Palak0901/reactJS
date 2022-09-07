import React from "react";

type propType = {
  style?: any,
  src?: string | undefined,
};
const ImageComponent = (props: propType) => {
  return <img src={props.src} style={props.style}></img>;
};
export default ImageComponent;

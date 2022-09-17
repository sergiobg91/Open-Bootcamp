import React, { useState } from "react";

const Geometric = () => {

  const randomColor = (max) => {
    return Math.floor(Math.random() * max);
  };

  const fixStyle = {
    width: '255px',
    height: '255px',
    display: 'block',
    margin: '15rem auto'
  };

  const typeOfStyles = {
    initStyle: {
        ...fixStyle,
        backgroundColor: 'black',
    },
    enterStyle: {
        ...fixStyle,
        backgroundColor: `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`,
    },
    overStyle: {
        ...fixStyle,
        backgroundColor: 'black'
    },
    doubleClickStyle: {
        ...fixStyle,
        backgroundColor: 'black'
    }
  };

  const [styleState, setStyleState] = useState(typeOfStyles.initStyle);

  const onMouseEvent = () => {
    setStyleState(typeOfStyles.enterStyle);
  };

  const onMouseOver = () => {
    setStyleState(typeOfStyles.overStyle);
  };

  const bdClickMouse = () => {
    setStyleState(typeOfStyles.doubleClickStyle);
  };

  return (
    <div
      style={ styleState } onMouseEnter={ onMouseEvent } onMouseLeave={onMouseOver} onDoubleClick={bdClickMouse}
    ></div>
  );
};

export default Geometric;

import React from "react";

const CustomButton = ({ onClick, style, label }) => {
  return (
    <button onClick={e => onClick(e)} style={style}>
      {label}
    </button>
  );
};

export default CustomButton;

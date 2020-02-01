import React from "react";
import { Button } from "antd";

const CustomButton = ({ onClick, style, label, ...props }) => {
  return (
    <Button onClick={e => onClick(e)} style={style}>
      {label}
    </Button>
  );
};

export default CustomButton;

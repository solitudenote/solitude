import React from "react";
import { Tag } from "antd";

const CustomTag = ({ onClick, style, label, ...props }) => {
  style = { cursor: "pointer", ...style };
  return (
    <Tag onClick={e => onClick(e)} style={style} {...props}>
      {label}
    </Tag>
  );
};

export default CustomTag;

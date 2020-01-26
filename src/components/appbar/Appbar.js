import React from "react";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdChromeReaderMode } from "react-icons/md";
import { TiEye } from "react-icons/ti/";
import "../../styles/Appbar.css";

const Appbar = ({ onViewModeChange }) => {
  return (
    <div className="appbar">
      <div className="logo">
        <span>Solitude</span>
      </div>

      <div className="modebar">
        <MdFormatAlignLeft
          width="22"
          height="22"
          onClick={() => onViewModeChange("100%")}
        />
        <MdChromeReaderMode
          width="22"
          height="22"
          onClick={() => onViewModeChange("50%")}
        />
        <TiEye width="22" height="22" onClick={() => onViewModeChange("0%")} />
      </div>
    </div>
  );
};

export default Appbar;

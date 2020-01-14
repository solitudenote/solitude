import React, { useState, useEffect } from "react";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdChromeReaderMode } from "react-icons/md";
import { TiEye } from "react-icons/ti/";
import "../../styles/Appbar.css";

const AppbarContainer = ({ onViewModeChange }) => {
  const [mode, setMode] = useState("split");

  // Update the app view mode
  useEffect(() => {
    onViewModeChange(mode);
  }, [mode]);

  return (
    <div className="appbar">
      <div className="logo">
        <span>Solitude</span>
      </div>

      <div class="toolbar">
        <MdFormatAlignLeft
          width="22"
          height="22"
          onClick={() => setMode("editor")}
        />
        <MdChromeReaderMode
          width="22"
          height="22"
          onClick={() => setMode("split")}
        />
        <TiEye width="22" height="22" onClick={() => setMode("view")} />
      </div>
    </div>
  );
};

export default AppbarContainer;

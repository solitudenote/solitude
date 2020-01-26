import React from "react";
import SplitPane from "react-split-pane";
import CustomEditorContainer from "../customEditor/CustomEditorContainer.js";
import ResultPane from "../resultPane/ResultPane.js";

const SplitView = ({ paneSize, onPaneSizeChange }) => {
  return (
    <SplitPane
      split="vertical"
      defaultSize={paneSize}
      size={paneSize}
      //defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
      //onChange={size => localStorage.setItem("splitPos", size)}
      onDragFinished={size => onPaneSizeChange(size)}
    >
      <div className="editor-pane">
        {paneSize !== "0%" && <CustomEditorContainer />}
      </div>
      <div className="result-pane">
        <ResultPane />
      </div>
    </SplitPane>
  );
};

export default SplitView;

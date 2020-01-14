import React, { useState } from "react";
import SplitPane from "react-split-pane";
import CustomEditorContainer from "./shared/customEditor/CustomEditorContainer.js";
import ResultPane from "./components/resultPane/ResultPane.js";
import AppbarContainer from "./components/appbar/AppbarContainer.js";
import "./styles/App.css";
import "./styles/Resizer.css";
import "./styles/ResultPane.css";

function App() {
  const [paneSize, setPaneSize] = useState("50%");

  // Remove global states in APP and use redux
  const [markdownValue, setMarkdownValue] = useState("");

  const handleMarkdownValueChange = value => {
    setMarkdownValue(value);
  };

  const handleViewModeChange = value => {
    if (value == "editor") {
      setPaneSize("100%");
    } else if (value == "split") {
      setPaneSize("50%");
    } else if (value == "view") {
      setPaneSize("0%");
    }
  };

  return (
    <div>
      <AppbarContainer onViewModeChange={handleViewModeChange} />
      <SplitPane split="vertical" defaultSize={paneSize}>
        <div className="editor-pane">
          <CustomEditorContainer
            onMarkdownValueChange={handleMarkdownValueChange}
          />
        </div>
        <div className="result-pane">
          <ResultPane markdownValue={markdownValue} />
        </div>
      </SplitPane>
    </div>
  );
}

export default App;

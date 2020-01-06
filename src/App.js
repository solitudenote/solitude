import React, { useState } from "react";
import SplitPane from "react-split-pane";
import CustomEditorContainer from "./shared/customEditor/CustomEditorContainer.js";
import ResultPane from "./components/resultPane/ResultPane.js";
import "./styles/Resizer.css";
import "./styles/ResultPane.css";

function App() {
  // Remove global states in APP and use redux
  const [markdownValue, setMarkdownValue] = useState("");

  const handleMarkdownValueChange = value => {
    setMarkdownValue(value);
  };

  console.log(markdownValue);

  return (
    <SplitPane split="vertical" defaultSize="50%">
      <div>
        <CustomEditorContainer
          onMarkdownValueChange={handleMarkdownValueChange}
        />
      </div>
      <div>
        <ResultPane markdownValue={markdownValue} />
      </div>
    </SplitPane>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import CustomEditor from "./CustomEditor.js";

const CustomEditorContainer = ({ onMarkdownValueChange }) => {
  const [editorValue, setEditorValue] = useState("");

  // Update the global markdown value whenever the markdown changes.
  useEffect(() => {
    onMarkdownValueChange(editorValue);
  }, [editorValue]);

  return (
    <div>
      <CustomEditor value={editorValue} onValueChange={setEditorValue} />
    </div>
  );
};

export default CustomEditorContainer;

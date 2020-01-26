import React, { useState, useEffect } from "react";
import CustomEditor from "./CustomEditor.js";

const CustomEditorContainer = ({
  onMarkdownValueChange,
  onSelectedEditorChange,
  initialvalue
}) => {
  const [editorValue, setEditorValue] = useState(initialvalue);

  // Update the global markdown value whenever the markdown changes.
  useEffect(() => {
    onMarkdownValueChange(editorValue);
  }, [editorValue]);

  return (
    <div>
      <CustomEditor
        value={editorValue}
        onValueChange={setEditorValue}
        onSelectedEditorChange={onSelectedEditorChange}
      />
    </div>
  );
};

export default CustomEditorContainer;

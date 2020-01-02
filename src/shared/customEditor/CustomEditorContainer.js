import React, { useState } from "react";
import CustomEditor from "./CustomEditor.js";

const CustomEditorContainer = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div style={{ border: "1px solid" }}>
      <CustomEditor value={editorValue} onValueChange={setEditorValue} />
    </div>
  );
};

export default CustomEditorContainer;

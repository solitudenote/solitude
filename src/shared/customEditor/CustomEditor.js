import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/gfm/gfm";

import "../../styles/CodeMirror.css";

const CustomEditor = ({ value, onValueChange }) => {
  return (
    <CodeMirror
      options={{
        mode: "gfm",
        lineNumbers: true,
        spellcheck: true
      }}
      value={value}
      onBeforeChange={(editor, data, value) => {
        onValueChange(value);
      }}
    />
  );
};

export default CustomEditor;

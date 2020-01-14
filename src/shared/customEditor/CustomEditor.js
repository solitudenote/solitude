import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
//import "codemirror/theme/gruvbox-dark.css";
import "codemirror/mode/gfm/gfm";

import "../../styles/CodeMirror.css";

const CustomEditor = ({ value, onValueChange }) => {
  return (
    <CodeMirror
      options={{
        mode: "gfm",
        lineNumbers: true,
        spellcheck: true,
        //theme: "gruvbox-dark"
        theme: "neo"
      }}
      value={value}
      onBeforeChange={(editor, data, value) => {
        onValueChange(value);
      }}
      height="100%"
    />
  );
};

export default CustomEditor;

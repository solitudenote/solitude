import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

require("codemirror/lib/codemirror.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/gfm/gfm");

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
        onValueChange({ value });
      }}
    />
  );
};

export default CustomEditor;

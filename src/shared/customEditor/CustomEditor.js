import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";

// Import supported languages here
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/mode/css/css";
import "codemirror/mode/go/go";
import "codemirror/mode/rust/rust";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/gfm/gfm";
import "codemirror/mode/shell/shell";

import "../../styles/CodeMirror.css";

const CustomEditor = ({ value, onValueChange, onSelectedEditorChange }) => {
  return (
    <CodeMirror
      options={{
        mode: "gfm",
        lineNumbers: true,
        spellcheck: true,
        //autofocus: true,
        theme: "neo"
      }}
      value={value}
      onBeforeChange={(editor, data, value) => {
        onValueChange(value);
      }}
      // TODO
      // Editor is set to autofocus, and onFocus the editorState will be
      // updated.
      // Remove onFocus and add initialize the editorState with a codemirror
      // instance
      //onFocus={(editor, data) => {
      //onSelectedEditorChange(editor);
      //}}
      onSelection={(editor, data) => {
        onSelectedEditorChange(editor);
      }}
      height="100%"
    />
  );
};

export default CustomEditor;

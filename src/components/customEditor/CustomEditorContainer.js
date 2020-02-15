import React from "react";
import { connect } from "react-redux";
import CustomEditor from "./CustomEditor.js";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMarkdownValue,
  updateEditorState,
  updateNote
} from "../../actions";

const CustomEditorContainer = () => {
  const dispatch = useDispatch();
  const editorValue = useSelector(state => state.editorValue);

  const onSelectedEditorChange = editor => dispatch(updateEditorState(editor));
  const onValueChange = value => {
    dispatch(updateMarkdownValue(value));

    if (editorValue.noteId) {
      // Update the corresponding note value
      dispatch(
        updateNote({ text: value, oid: editorValue.noteId, isDirty: true })
      );
    }
  };

  return (
    <CustomEditor
      markdownValue={editorValue.markdownValue}
      onSelectedEditorChange={onSelectedEditorChange}
      onValueChange={onValueChange}
    />
  );
};

export default CustomEditorContainer;

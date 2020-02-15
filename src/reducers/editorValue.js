const editorValue = (state = { markdownValue: "", noteId: null }, action) => {
  switch (action.type) {
    case "UPDATE_MARKDOWN_VALUE":
      return { ...state, markdownValue: action.text };
    case "LOAD_NOTE":
      return { ...state, noteId: action.noteId, markdownValue: action.text };
    default:
      return state;
  }
};

export default editorValue;

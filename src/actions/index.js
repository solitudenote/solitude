export const updateMarkdownValue = text => ({
  type: "UPDATE_MARKDOWN_VALUE",
  text
});

export const updateEditorState = editorState => ({
  type: "UPDATE_EDITOR_STATE",
  editorState
});

export const updatePaneSize = size => ({
  type: "UPDATE_PANE_SIZE",
  size
});

export const updateToken = token => ({
  type: "UPDATE_TOKEN",
  token
});

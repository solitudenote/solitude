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

export const updateUser = userName => ({
  type: "UPDATE_GIT_USER",
  userName
});

export const showModal = ({ modalType, modalProps }) => ({
  type: "SHOW_MODAL",
  modalType,
  modalProps
});

export const hideModal = () => ({
  type: "HIDE_MODAL"
});

export const registerSolitudeRepo = repo => ({
  type: "REGISTER_SOLITUDE_REPO",
  repo
});

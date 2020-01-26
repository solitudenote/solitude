const editor = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_EDITOR_STATE":
      return action.editorState || state;
    default:
      return state;
  }
};

export default editor;

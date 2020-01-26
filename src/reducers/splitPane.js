const splitPane = (state = { size: "50%" }, action) => {
  switch (action.type) {
    case "UPDATE_PANE_SIZE":
      return { ...state, size: action.size };
    default:
      return state;
  }
};

export default splitPane;

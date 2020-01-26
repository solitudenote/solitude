const markdownValue = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_MARKDOWN_VALUE":
      return action.text;
    default:
      return state;
  }
};

export default markdownValue;

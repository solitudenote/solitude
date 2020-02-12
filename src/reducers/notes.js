const notes = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_NOTE_LIST":
      return [...action.list];
    case "DELETE_NOTE":
      return [...action.list];
    case "ADD_NOTE":
      return [...action.list];
    default:
      return state;
  }
};

export default notes;

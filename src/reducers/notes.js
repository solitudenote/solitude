const notes = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_NOTE_LIST":
      return [...action.list];
    case "UPDATE_NOTE":
      return state.map(note => {
        if (note.oid !== action.oid) return note;
        return {
          ...note,
          text: action.text,
          isDirty: action.isDirty
        };
      });
    default:
      return state;
  }
};

export default notes;

//case "DELETE_NOTE":
//return [...action.list];
//case "ADD_NOTE":
//return [...action.list];

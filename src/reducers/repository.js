const initialState = {
  loading: true
};
const repository = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SOLITUDE_REPO":
      return { ...state, ...action.repo };
    case "UPDATE_SOLITUDE_REPO":
      return { ...state, ...action.repo };
    default:
      return state;
  }
};

export default repository;

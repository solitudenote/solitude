const auth = (state = { token: "" }, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default auth;

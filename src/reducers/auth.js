const auth = (state = { token: "" }, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.token };
    case "UPDATE_GIT_USER":
      return { ...state, userName: action.userName };
    default:
      return state;
  }
};

export default auth;

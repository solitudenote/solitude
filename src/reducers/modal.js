let initialState = {};
const modal = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        isOpen: true,
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case "HIDE_MODAL":
      return { ...initialState, isOpen: false };
    default:
      return state;
  }
};

export default modal;

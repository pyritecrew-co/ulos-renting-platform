export const INIT_GLOBAL = {
  loading: false,
  error: false,
  success: false,
  toggleSidebar: false,
};

export const GLOBAL_ACTION_TYPE = {
  setToggle: "SET_TOGGLE",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTION_TYPE.setToggle:
      return setToggleSidebar(state);

    default:
      return state;
  }
};

//LOGIC
const setToggleSidebar = (state) => {
  return {
    ...state,
    toggleSidebar: !state.toggleSidebar,
  };
};

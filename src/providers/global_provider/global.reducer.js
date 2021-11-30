export const INIT_GLOBAL = {
  loading: false,
  error: false,
  success: false,
  toggleSidebar: false,
  currentUser: null,
};

export const GLOBAL_ACTION_TYPE = {
  setToggle: "SET_TOGGLE",
  setUser: "SET_USER",
  setError: "SET_ERROR",
  setSuccess: "SET_SUCCEED",
  setBusy: "SET_BUSY",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTION_TYPE.setToggle:
      return setToggleSidebar(state);
    case GLOBAL_ACTION_TYPE.setUser:
      return setCurrentUser(state, action.payload);
    case GLOBAL_ACTION_TYPE.setBusy:
      return setBusyLoader(state, action.payload);
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

const setCurrentUser = (state, payload) => {
  return {
    ...state,
    currentUser: payload,
  };
};

const setBusyLoader = (state, payload) => {
  return {
    ...state,
    loading: payload,
  };
};

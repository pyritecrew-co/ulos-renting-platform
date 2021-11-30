export const INIT_GLOBAL = {
  loading: false,
  error: false,
  success: false,
  toggleSidebar: false,
  currentUser: null,
  response: {
    title: "",
    message: "",
  },
};

export const GLOBAL_ACTION_TYPE = {
  setToggle: "SET_TOGGLE",
  setUser: "SET_USER",
  setError: "SET_ERROR",
  setSuccess: "SET_SUCCEED",
  setBusy: "SET_BUSY",
  setMessage: "SET_MESSAGE",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTION_TYPE.setToggle:
      return setToggleSidebar(state);
    case GLOBAL_ACTION_TYPE.setUser:
      return setCurrentUser(state, action.payload);
    case GLOBAL_ACTION_TYPE.setBusy:
      return setBusyLoader(state, action.payload);
    case GLOBAL_ACTION_TYPE.setError:
      return setErrorResponse(state, action.payload);
    case GLOBAL_ACTION_TYPE.setSuccess:
      return setSuccessResponse(state, action.payload);
    case GLOBAL_ACTION_TYPE.setMessage:
      return setMessageResponse(state, action.payload);
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

const setErrorResponse = (state, payload) => {
  return {
    ...state,
    error: payload,
  };
};

const setSuccessResponse = (state, payload) => {
  return {
    ...state,
    success: payload,
  };
};

const setMessageResponse = (state, payload) => {
  let { title, message } = payload;
  return {
    ...state,
    response: {
      title,
      message,
    },
  };
};

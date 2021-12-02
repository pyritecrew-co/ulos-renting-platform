export const INIT_REQUEST = {
  allRequests: [],
  loading: false,
};

export const REQUEST_ACTION_TYPE = {
  setAllRequest: "SET_ALL_REQUEST",
  setBusy: "SET_TO_BUSY",
};

export const requestReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_ACTION_TYPE.setAllRequest:
      return fetchAllRequest(state, action.payload);
    case REQUEST_ACTION_TYPE.setBusy:
      return setBusyWhenFetch(state, action.payload);
    default:
      return state;
  }
};

//LOGIC

const fetchAllRequest = (state, payload) => {
  return { ...state, allRequests: payload };
};

const setBusyWhenFetch = (state, payload) => {
  return { ...state, loading: payload };
};

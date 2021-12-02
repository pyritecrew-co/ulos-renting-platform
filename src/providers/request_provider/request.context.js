import { createContext, useContext, useReducer } from "react";
import { INIT_REQUEST, requestReducer } from "./request.reducer";

const RequestContext = createContext({
  ...INIT_REQUEST,
});

export const useRequestContext = () => useContext(RequestContext);

const RequestProvider = ({ children }) => {
  const [request, requestDispatch] = useReducer(requestReducer, INIT_REQUEST);
  return (
    <RequestContext.Provider
      value={{
        request,
        requestDispatch,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;

import { createContext, useContext, useReducer } from "react";
import { globalReducer, INIT_GLOBAL } from "./global.reducer";

const GlobalContext = createContext({
  ...INIT_GLOBAL,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [global, globalDispatch] = useReducer(globalReducer, INIT_GLOBAL);

  return (
    <GlobalContext.Provider
      value={{
        global,
        globalDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

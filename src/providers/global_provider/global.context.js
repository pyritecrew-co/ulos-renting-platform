import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { authentication } from "../../config/firebase.config";
import {
  globalReducer,
  GLOBAL_ACTION_TYPE,
  INIT_GLOBAL,
} from "./global.reducer";

const GlobalContext = createContext({
  ...INIT_GLOBAL,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [global, globalDispatch] = useReducer(globalReducer, INIT_GLOBAL);

  useEffect(() => {
    onAuthStateChanged(authentication, (currentUser) => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setUser,
        payload: currentUser,
      });
    });
    const intervalCheck = setInterval(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setOnline,
        payload: navigator.onLine,
      });
    }, [1000]);
    return () => clearInterval(intervalCheck);
  }, []);

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

import { createContext, useContext, useReducer } from "react";
import { INIT_USERITEM, userItemReducer } from "./user_item.reducer";

const UserItemContext = createContext({
  ...INIT_USERITEM,
});

export const useUserItemContext = () => useContext(UserItemContext);

const UserItemProvider = ({ children }) => {
  const [userItem, userItemDispatch] = useReducer(
    userItemReducer,
    INIT_USERITEM
  );
  return (
    <UserItemContext.Provider
      value={{
        userItem,
        userItemDispatch,
      }}
    >
      {children}
    </UserItemContext.Provider>
  );
};

export default UserItemProvider;

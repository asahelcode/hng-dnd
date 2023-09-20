import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
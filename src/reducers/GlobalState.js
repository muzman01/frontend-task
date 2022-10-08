import { createContext, useEffect, useReducer } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
 
    data: [],
    

  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { data } = state;

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
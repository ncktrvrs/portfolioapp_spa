import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

export const Context = createContext({}); // rename

export function ContextComponent({ children }) {
  //ProjectContextComponent
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

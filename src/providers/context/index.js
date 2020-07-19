import React, { useReducer, createContext } from "react";
import defaultContext from "./defaultContext";

const AppContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case "SETLANG":
      return { ...state, lang: action.payload };
  }
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

import { createContext, useReducer } from "react";
import { initial, bookReducer } from "../reducer";

const Context = createContext();

function ContextProvider({ children }) {
  const [books, bookDispacth] = useReducer(bookReducer, initial);

  const context = { books: { state: books, dispatch: bookDispacth } };

  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };

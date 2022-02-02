import { createContext, useState } from "react";

import React from "react";

export const myContext = createContext();
const { Provider } = myContext;
export default function Context({ children }) {
  const [info, setinfo] = useState({});



  return (
    <Provider
      value={{ info, setinfo}}
    >
      {children}
    </Provider>
  );
}

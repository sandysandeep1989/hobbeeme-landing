'use client'

import { createContext, useContext, useState } from "react";

// 1. Create the context
export const MultiStepContext = createContext();

// 2. Create a provider component
export function MultiStepProvider({ children }) {
  const [stepNo, setStepNo] = useState(1);

  return (
    <MultiStepContext.Provider value={{ stepNo, setStepNo }}>
      {children}
    </MultiStepContext.Provider>
  );
}


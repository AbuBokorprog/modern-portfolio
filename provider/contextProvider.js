"use client";

import React, { createContext, useState } from "react";

export const contextProvider = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState();

  const value = {
    token,
    setToken,
  };
  return (
    <contextProvider.Provider value={value}>
      {children}
    </contextProvider.Provider>
  );
};

export default Provider;

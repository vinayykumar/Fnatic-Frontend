// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

export const Context = createContext();

export function AppContext({ children }) {
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  const value = {
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <Context.Provider value={value}>
      {children} {/* Render children only when auth state is loaded */}
    </Context.Provider>
  );
}

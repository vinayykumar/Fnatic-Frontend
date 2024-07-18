// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  const value = {
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <AppContext.Provider value={value}>
      {children} {/* Render children only when auth state is loaded */}
    </AppContext.Provider>
  );
}

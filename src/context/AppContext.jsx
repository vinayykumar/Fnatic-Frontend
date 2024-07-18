// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/firebaseConfig'; 

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // Firebase user object
  const [loading, setLoading] = useState(false); // To handle initial loading state
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  function logout() {
    return auth.signOut();
  }

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false); // Once auth state is determined, set loading to false
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logout,
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when auth state is loaded */}
    </AuthContext.Provider>
  );
}

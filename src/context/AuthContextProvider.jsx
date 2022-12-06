import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";

export const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export default AuthContextProvider;

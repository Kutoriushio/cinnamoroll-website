import { createContext, useContext, useState } from "react";
import { getUserInfo } from "../api/getUserInfo";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  async function handleLoginStatus(userEmail) {
    const userInfo = await getUserInfo(userEmail);
    setLoggedIn(true);
    setUser(userInfo);
  }

  function handleLogout() {
    setLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ loggedIn, handleLoginStatus, user, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

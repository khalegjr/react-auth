import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const isAuthenticated = false;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

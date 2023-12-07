import React, { createContext } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogin, setIsLogin] = React.useState(true);
  const value = [isLogin, setIsLogin];
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}

export { AuthProvider, useAuth };

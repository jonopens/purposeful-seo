import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { Auth } from '../types/base'

const defaultAuthProvider: Auth = {
  user: { firstName: null, lastName: null, email: null },
  login: () => {},
  logout: () => {},
};
const AuthContext = createContext(defaultAuthProvider);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage('ps_user', null);
  const navigate = useNavigate();

  // TODO: types for data
  const login = async (data: any) => {
    setUser(data);
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
import React, { useEffect, useMemo, useState } from "react";

interface AuthProps {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
}

export const Auth = React.createContext({} as AuthProps);

export const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(
    !!sessionStorage.getItem("Authorization")
  );
  const setAuth = (value: boolean) => setIsAuth(value);

  const contextValues = useMemo(
    () => ({
      isAuth,
      setAuth,
    }),
    [isAuth, setAuth]
  );

  return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
};

export const useAuthContext = (): AuthProps => React.useContext(Auth);

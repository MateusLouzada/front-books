import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("token");

    if (recoveredUser && recoveredUser !== "undefined") {
      setUser(JSON.parse(recoveredUser));
    }

    if (recoveredToken && recoveredToken !== "undefined") {
      api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    const loggedUser = response.data;
    const token = response.data.token;

    localStorage.setItem(
      "user",
      JSON.stringify({ id: loggedUser.id, email: loggedUser.email })
    );
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser({ id: loggedUser.id, email: loggedUser.email });
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

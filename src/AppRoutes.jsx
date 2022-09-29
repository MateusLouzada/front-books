import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthProvider, AuthContext } from "./contexts/auth";
import { BookProvider } from "./contexts/bookContext";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/"
            element={
              <BookProvider>
                <Private>
                  <HomePage />
                </Private>
              </BookProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;

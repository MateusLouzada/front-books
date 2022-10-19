import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthContext, AuthProvider } from "./contexts/auth";
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
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <BookProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/dashboard"
              element={
                <Private>
                  <HomePage />
                </Private>
              } 
            /> 
          </Routes>
        </BookProvider>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;

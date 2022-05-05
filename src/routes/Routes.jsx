import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useUser } from "../context/authcontext";
import Students from "../pages/alumno";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../context";
import Dashboard from "../pages/dashboard";
import Perfil from "../pages/perfil";
import Layout from "../components/Layout/Layout";

const RoutesAPP = () => {
  const { token, loading } = useUser();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="login"
            element={token ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="statistics"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="customers"
            element={
              <RequireAuth>
                <Students />
              </RequireAuth>
            }
          />
            <Route
              path="detailscustommer/:id"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
              />
             
          <Route
            path="perfil"
            element={
              <RequireAuth>
                <Perfil />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

function RequireAuth({ children }) {
  const { token, loading } = useUser();
  let location = useLocation();
  console.log("token1", token);
  if (token == null) {
    console.log("token2", token);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // if(!loading){
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
  // }
  // return null;
}
export default RoutesAPP;

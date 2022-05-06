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
  const { token,isadmin, loading } = useUser();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="login"
            element={token ? isadmin?<Navigate to="/students" replace />:<Navigate to="/" replace /> : <Login />}
          />
          <Route
            index
            element={
              <RequireAuth>
                {isadmin?<Students />:<HomePage  />}
              </RequireAuth>
            }
          />
          <Route
            path="statistics"
            element={
              <RequireAuth isAdmin>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="students"
            element={
              <RequireAuth isAdmin>
                <Students />
              </RequireAuth>
            }
          />
            <Route
              path="detailstudent/:id"
              element={
                <RequireAuth isAdmin>
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

function RequireAuth({ children,isAdmin }) {
  const { token,user,isadmin } = useUser();
  let location = useLocation();
  if (token == null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isAdmin) {
    if (isadmin) {
      return (
        <>
          <Layout>{children}</Layout>
        </>
      );
    }
    return <Navigate to="/" replace />;
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

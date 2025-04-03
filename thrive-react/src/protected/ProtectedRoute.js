import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="protected_route_main">
        <Header/>
        <div className="container mw-sm-960 p-0 p-sm-4">
          <Outlet />
        </div>
    </div>
  );
};

export default ProtectedRoute;

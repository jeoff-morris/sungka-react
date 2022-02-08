import React from "react";
import { useLocation, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  let location = useLocation();

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

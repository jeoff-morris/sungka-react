import React from "react";
import { ProtectedRoute } from "../../protected/ProtectedRoute";

export const Profile = (props: any) => {
  return (
    <>
      <ProtectedRoute />
      <div></div>
    </>
  );
};

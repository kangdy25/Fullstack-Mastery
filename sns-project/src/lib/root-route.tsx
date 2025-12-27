import React from "react";
import { Navigate, Route, Routes } from "react-router";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/sign-in" />
      <Route path="/sign-up" />
      <Route path="/forget-password" />

      <Route path="/" />
      <Route path="/post/:postId" />
      <Route path="/profile/:userId" />
      <Route path="/reset-password" />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RootRoute;

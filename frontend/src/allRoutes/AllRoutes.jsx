import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/common/Loader.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));
const Home = lazy(() => import("../pages/Dashboard.jsx"));
// const PrivateRoute = lazy(() => import("../hooks/PrivateRoute.jsx"));
// const PublicRoute = lazy(() => import("../hooks/PublicRoute.jsx"));

function AllRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            // <PublicRoute>
              <Login />
            // </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default AllRoutes;

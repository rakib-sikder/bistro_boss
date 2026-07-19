import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./userAuthentication/AuthProvider.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider><div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      </div></AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

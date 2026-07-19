import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./userAuthentication/AuthProvider.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { Toaster } from "./components/ui/sonner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <div className="mx-auto max-w-screen-xl">
          <RouterProvider router={router} />
        </div>
        <Toaster position="top-center" />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

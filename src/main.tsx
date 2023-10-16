import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import WebApp from "@twa-dev/sdk";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Create from "./pages/create.tsx";
import Info from "./pages/info.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "*",
      element: <Navigate replace to="/" />,
    },
  ],
  { basename: "/twa-vite/" }
);

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

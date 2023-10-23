import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import WebApp from "@twa-dev/sdk";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./App.tsx";
import SysComponent from "./pages/sys-components/page.tsx";
import SysAbility from "./pages/sys-abilities/page.tsx";
import ThemeConfig from "./pages/theme-config/page.tsx";

// const modules = import.meta.glob("./pages/*/page.tsx");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/sys-components",
      element: <SysComponent />,
    },
    {
      path: "/sys-abilities",
      element: <SysAbility />,
    },
    {
      path: "/theme-config",
      element: <ThemeConfig />,
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

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

const hash = window.location.hash.slice(1);
const params = new URLSearchParams(hash);
const initData = new URLSearchParams(params.get("tgWebAppData") || "");
sessionStorage.setItem("initData", JSON.stringify(initData));
// query_id: 'abcdef'
// user: `{id: 1, first_name: "Peris", last_name: "Hilton", username: "peris", language_code: "en", is_premium: true}`
// auth_date: '1669670292'
// hash: '4975e881a0347264512f6047e1f3d698cbd2fe0bc1573'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

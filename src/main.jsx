import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "src/routes/home";
import Ott from "src/routes/ott";
import Component from "src/routes/components";
import Otp from "./components/otp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ott",
    element: <Ott />,
  },
  {
    path: "components",
    element: <Component />,
    children: [
      {
        path: "otp",
        element: <Otp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

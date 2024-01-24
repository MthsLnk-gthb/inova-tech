import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Inicio from './Pages/Inicio/index';
import Servicos from "./Pages/Servicos/index.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
  {
    path: "/servicos",
    element: <Servicos/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);

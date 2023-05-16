import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Footer from "./components/footer";
import App from "./App";
import AddItem from "./components/addItem";
import AddProductPage from "./pages/addproductpage";
import SideMenu from "./components/sidemenu";

const router = createBrowserRouter([
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/addproduct',
    element: <AddProductPage />
  },
  {
    path: '/sidemenu',
    element: <SideMenu />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
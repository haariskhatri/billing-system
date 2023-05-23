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
import Preloader from "./components/loader";
import AddCategory from "./components/addcategory";
import BarcodeGenerator from "./components/barcodegenerator";
import { Dashboard } from "@mui/icons-material";
import Dashboardpage from "./pages/dashboardpage";
import DeliveryPage from "./pages/deliverynote";

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
    path: '/barcode',
    element: <BarcodeGenerator />
  },
  {
    path: '/dashboard',
    element: <Dashboardpage />
  },
  {
    path: '/delivery',
    element: <DeliveryPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/contact",
        element: <div>Contact Us</div>,
      },
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/menu",
        element: <div>Our Menu</div>,
      },
      {
        path: "/shop",
        element: <div>Our Shop</div>,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      }
    ]
  },
]);

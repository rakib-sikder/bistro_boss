import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Ourmenu/OurMenu";
import Orderpage from "../pages/Order/Orderpage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";



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
        path: "contact",
        element: <div>Contact Us</div>,
      },
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
       
        path  : 'order/:category',
        element: <Orderpage />,

      },
      {
        path: "cart",
        element: <div>Cart</div>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Ourmenu/OurMenu";
import Orderpage from "../pages/Order/Orderpage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../pages/Cart/Cart";



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
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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
        element: <Cart />,
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

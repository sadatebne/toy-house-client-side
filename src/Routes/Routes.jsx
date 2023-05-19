import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Home from "../components/Pages/Home/Home/Home";
import AddToys from "../components/Pages/AddToys/AddToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
        {
          path: "/register",
          element:<Register></Register> ,
        },
        {
          path: "/addToys",
          element:<AddToys></AddToys> ,
        },
        
      ],
    },
  ]);

  export default router
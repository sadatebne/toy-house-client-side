import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Login from "../components/Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/login",
          element:<Login></Login> ,
        },
        
      ],
    },
  ]);

  export default router
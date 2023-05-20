import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Home from "../components/Pages/Home/Home/Home";
import AddToys from "../components/Pages/AddToys/AddToys";
import ViewToyDetails from "../components/Pages/ViewToyDetails/ViewToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../components/Pages/AllToys/AllToys";
import DetailsAllToys from "../components/Pages/AllToys/DetailsAllToys";
import MyToys from "../components/Pages/MyToys/MyToys";
import UpdateToys from "../components/Pages/MyToys/UpdateToys";

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
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute> ,
        },
        {
          path: "/allToys",
          element:<AllToys></AllToys> ,
        },
        {
          path: "/myToys",
          element:<MyToys></MyToys> ,
        },
        {
          path: "/toyUpdate/:id",
          element:<UpdateToys></UpdateToys>,
          loader:({params})=>fetch(`http://localhost:3000/updateToys/${params.id}`)
        },
        {
          path: "/toyDetails/:id",
          element:<DetailsAllToys></DetailsAllToys>,
          loader:({params})=>fetch(`http://localhost:3000/userToys/${params.id}`)
        },
        {
          path: "/viewToyDetails/:id",
          element:<PrivateRoute><ViewToyDetails></ViewToyDetails></PrivateRoute> ,
          loader:({params})=>fetch(`http://localhost:3000/allToys/${params.id}`)
        },
        
      ],
    },
  ]);

  export default router
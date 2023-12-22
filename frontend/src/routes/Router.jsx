import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Edit from "../pages/Edit";
import Who_it_is_for from "../components/Who_it_is_for";
import Contact from "../components/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "about",
        element: <PrivateRoute><Who_it_is_for /></PrivateRoute>,
      },
      {
        path: "contact",
        element: <PrivateRoute><Contact /></PrivateRoute>,
      },
      {
        path: "edit/:id",
        element: <PrivateRoute><Edit /></PrivateRoute>,
      },
    ],
  },
]);

export default Router;

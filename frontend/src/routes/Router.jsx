import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      },
    ]
  },
]);

export default Router;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Posts, Users } from "../components";
import Home from "../components/home";
import App from "../App";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default AppRouter;

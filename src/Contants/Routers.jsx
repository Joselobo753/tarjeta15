import { createBrowserRouter } from "react-router-dom";
import PublicView from "../Views/PublicView";
import PrivateView from "../Views/PrivateView";
import RootView from "../Views/RootView";
import Home from "../Components/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <PublicView />,
        children: [
          {
            path: "",
            element: <Home/>,
          },
          {
            path: "invitacion/:id",
            element: <p>detail</p>,
          },
        ],
      },
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "/admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);

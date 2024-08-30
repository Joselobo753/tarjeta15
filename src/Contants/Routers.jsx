import { createBrowserRouter } from "react-router-dom";
import PublicView from "../Views/PublicView";
import PrivateView from "../Views/PrivateView";
import RootView from "../Views/RootView";
import Home from "../Components/home/Home";
import Admin from "../Components/admin.jsx/Admin";
import Invitacion from "../Components/invitacion/Invitacion";

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
            path: "invitacion",
            element: <Invitacion/>,
          },
        ],
      },
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "/admin",
            element: <Admin/>,
          },
        ],
      },
    ],
  },
]);

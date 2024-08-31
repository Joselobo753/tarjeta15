import { createBrowserRouter } from "react-router-dom";
import PublicView from "../Views/PublicView";
import PrivateView from "../Views/PrivateView";
import RootView from "../Views/RootView";

import Admin from "../Components/admin.jsx/Admin";
import Invitacion from "../Components/invitacion/Invitacion";
import Modalconfir from "../Components/invitacion/Modalconfir";

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
            element: <Admin/>,
          },
          {
            path: "invitacion",
            element: <Invitacion/>,
          },
          {
            path: "confirm",
            element: <Modalconfir/>
          }
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

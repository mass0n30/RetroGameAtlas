import App from "./App"; 
import Home from "./pages/Home"; 
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DiscoverSection from "./pages/Discover";
import GameDetails from "./pages/GameDetails";
import Collection from "./pages/Collection";
import DashboardSection from "./pages/DashBoard";
import SettingsPage from "./pages/SettingsPage";

import { Navigate } from "react-router-dom";


const routes = [
  {
    path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default render
        element:<Navigate to="/home"/>,         
      },
      {
        path: "login",
        element: <Navigate to="/home"/>
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "home",
        element: <Home/>,
        children: [
          {
            index: true,
            element: <DashboardSection/> 
          },
          {
            path: "discover",
            element: <DiscoverSection/>
          },
          {
            path: "details/:gameIgdbId",
            element: <GameDetails/>
          },
          {
            path: "saved",
            element: <Collection/>
          },
          {
            path: "settings",
            element: <SettingsPage/>
          }
        ]
      },
    ]
  },

];

export default routes;
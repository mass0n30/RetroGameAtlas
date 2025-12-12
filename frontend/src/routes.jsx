import App from "./App"; 
import Home from "./pages/Home"; 
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import HomeSaved from "./pages/HomeSaved";
import SettingsPage from "./pages/SettingsPage";

const routes = [
  {
    path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default render
        element:<Login/>,         
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            index: true,
            element: <HomePage/> 
          },

          {
            path: "details/:gameId",
            element: <GameDetails/>
          },
          {
            path: "saved",
            element: <HomeSaved/>
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
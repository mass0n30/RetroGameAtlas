import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import 'normalize.css';
import './styles/index.css';

import { registerSW } from "virtual:pwa-register";
registerSW({ immediate: true });


const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

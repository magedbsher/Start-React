import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";
import Notfound from "./Component/Notfound/Notfound";
import Portofolio from "./Component/Portofolio/Portofolio";
import Start from "./Component/Start/Start";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true , element: <Home/> },
      { path: "Portofolio", element: <Portofolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "start", element: <Start /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

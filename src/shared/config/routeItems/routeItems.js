import {
    createBrowserRouter,
  } from "react-router-dom";
import { Home } from "../../../pages/Home";
import { Barbershop } from "../../../pages/Barbershop";
import { Gym } from "../../../pages/Gym";
import { LogoIcon } from "../../assets";
import Medicine from "../../../pages/Medicine/ui/Medicine";
import Spa from "../../../pages/Spa/ui/Spa";
import Restaurants from "../../../pages/Restaurants/ui/Restaurants";
import { LogIn } from "../../../pages/SignIn";
import { SignUp } from '../../../pages/SignUp';
import Contact from "../../../pages/Contact/ui/Contact";
import Gallery from "../../../pages/Gallery/ui/Gallery";
import { Blog } from "../../../pages/Blog";
import { ProductDetails } from "../../../pages/ProductDetails";


export const routeItems = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/barbershop",
        element: <Barbershop />
    },
    {
        path: "/gym",
        element: <Gym />
    },
    {
        path: "/medicine",
        element: <Medicine />
    },
    {
        path: "/restaurants",
        element: <Restaurants />
    },
    {
        path: "/spa",
        element: <Spa />
    },
    {
        path: "/gallery",
        element: <Gallery />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/productdetails/:id",
        element: <ProductDetails />
    },
  ]);
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// createBrowserRouter will create configuration for routting.
// routerProvider provide configuration
const AppLayout = () => {
    return(
        <div className="App">
            
            <Header />
            <Outlet /> {/**replace randomly with component according to path. */}
           
        </div>
    )
}


const appRouter = createBrowserRouter([ // list of objects
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />, // when path is "/" render Body component
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resid", //resId is dynamic
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); 

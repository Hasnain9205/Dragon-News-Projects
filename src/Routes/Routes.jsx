import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";
import Details from "../Pages/NewsDetails/Details";
import PrivateRoute from "./PrivateRoute";


const routes =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {

                path: '/',
                element: <Home></Home>,
                loader: ()=>
                fetch('/news.json'),
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
        ],
    },
])
export default routes;
  
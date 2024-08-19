import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllServices from "../pages/AllServices";
import SignleService from "../component/SignleService";
import AddServicePage from "../pages/AddServicePage";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../pages/ManageService/ManageService";
import Update from "../pages/Update";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import Booking from "../pages/Booking";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
              index:true,
              element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <AllServices/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/service`)
            },
            {
                path: '/service/:id',
                element:<PrivateRoute> <SignleService/></PrivateRoute>,
               loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/add-service',
                element:<PrivateRoute><AddServicePage/></PrivateRoute>
            },
            {
                path: '/bookings',
                element:<PrivateRoute><Booking/></PrivateRoute>
            },
            {
                path: '/service-to-do',
                element: <PrivateRoute><ServiceToDo/></PrivateRoute>
            },
            {
                path: '/manage-service',
                element: <PrivateRoute><ManageService/></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/service`)
            },
            {
                path: '/update/:id',
                element: <Update/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            }
        ],
    }
])

export default router;
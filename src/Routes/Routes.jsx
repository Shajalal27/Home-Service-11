import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllServices from "../pages/AllServices";
import SignleService from "../component/SignleService";
import AddServicePage from "../pages/AddServicePage";
import Booking from "../pages/Booking";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../pages/ManageService/ManageService";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
              index:true,
              element: <Home></Home>,
              loader: () => fetch(`${import.meta.env.VITE_API_URL}/service`)
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
                element: <AllServices/>
            },
            {
                path: '/service/:id',
                element: <SignleService/>,
               loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/add-service',
                element:<PrivateRoute><AddServicePage/></PrivateRoute>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Booking/></PrivateRoute>
            },
            {
                path: '/manage-service',
                element: <ManageService/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/service`)
            }
        ],
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllServices from "../pages/AllServices";
import SignleService from "../component/SignleService";



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
            }
        ],
    }
])

export default router;
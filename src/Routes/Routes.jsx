import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        ],
    }
])

export default router;
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";



const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            {/* footer */}
        </div>
        
    );
};

export default Main;
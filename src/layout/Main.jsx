import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slider from "../component/Slider/Slider";



const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            <Slider/>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            {/* footer */}
            <Footer/>
        </div>
        
    );
};

export default Main;
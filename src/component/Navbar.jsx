import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logoImg from '../assets/images/logo.png'
const Navbar = () => {
    const{user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
   
    return (
        <div className="navbar border-b-4 border-indigo-400 ">
            <div className="navbar-start">
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[5] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/'>Services</Link></li>
                <li>
                    <details>
                    <summary className="">Dashboard</summary>
                    <ul className="p-2  z-10">
                        <li><Link to= '/'>Add Service</Link></li>
                        <li><Link to= '/'>Manage Service</Link></li>
                        <li><Link to= '/'>Booked-Services</Link></li>
                        <li><Link to= '/'>Service-To-Do</Link></li>
                    </ul>
                    </details>
                </li>
                    
                </ul>
             </div>
                <a className=" text-xl">
                    <img className="w-32 h-20" src={logoImg} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal px-4 dropdown-content mt-3  z-[5] p-2 shadow bg-base-100  space-x-4">
                
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/services'>Services</Link></li>
                <li>
                    <details>
                    <summary>Dashboard</summary>
                    <ul className="w-52">
                        <li><Link to= '/add-service'>Add Service</Link></li>
                        <li><Link to= '/mange-service'>Manage Service</Link></li>
                        <li><Link to= '/bookings'>Booked-Services</Link></li>
                        <li><Link to= '/service-to-do'>Service-To-Do</Link></li>
                    </ul>
                    </details>
                </li>
                   
                
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?
                    <div tabIndex={0} role="button" className=" flex gap-4 mr-12">
                    <div className=" bg-slate-400 w-14 h-14 rounded-full flex justify-center items-center">
                        <img className="rounded-full" alt="" src={user.photoURL} 
                    title={user.displayName}
                    />
                    </div>
                    <div>
                        <ul>
                            <li>
                               
                                <button onClick={handleLogOut} className="btn">LOGOUT</button>
                            </li>
                        </ul>
                    </div>
                </div>
                    :
                <Link to='/login'>
                    <button  className="btn">Login</button>
                </Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
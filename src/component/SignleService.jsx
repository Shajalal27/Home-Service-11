import { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

// import ModalForm from "./ModalForm"; 

const SignleService = () => {
    const service = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const{user} = useContext(AuthContext);
    const { _id,
            service_id,
            service_name,
            service_description ,
            service_image,  
            service_price,
            service_provider:{  
                name,
                 provider_email
            }
            } = service || {};

        //  const providerImg = service_provider? service_provider.image : ""  ;  
        //  const providerName = service_provider? service_provider.name : ""  ;

         const handleBooking = async e =>{
            if(user?.email === provider_email) return toast.error('Action not permitted')
                e.preventDefault()
                const form = e.target
                const name = form.name.value
                const serviceId = _id 
                const provider_name = name
                const user_email = user?.email
                const user_name = user?.displayName
                const service_price = parseFloat(form.price.value)
                const deadline = startDate
                const status = 'Pending'
            
                const bookData ={
                    serviceId, service_name, service_image, provider_name, provider_email, user_name, user_email, deadline, service_price, status
                }
                // console.table(bookData)  
                try{
                    const{data} = await axios.post(`${import.meta.env.VITE_API_URL}/books`, bookData)
                    console.log(data);
                    toast.success("Service booking successfull")
                    navigate('/bookings')
                } catch(err){
                    console.log(err)
                    toast.error('Service booking faild')
                } 
     }

    return (  
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center border-2 mt-12 mb-12 shadow-lg">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{service_name}</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{service_description}</p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3 text-xl font-bold text-red-500">Price:{service_price}</span>
                    </div>

                   
                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <CiLocationOn style={{fontSize:'40'}}/>

                        <span className="mx-3">service_area</span>
                    </div>

                    <div className="flex items-center px-3 gap-6">
                        <img className="w-12 h-12 rounded" src={service_image} alt="" />  
                        <p className="text-xl font-semibold">{service_name}</p> 
                    </div>
            
                </div>
                <div className="flex justify-end">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-warning text-xl font-bold" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>
                    <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                       <div className="grid lg:grid-cols-2 grid-cols-1">
                       <div className="w-[800px] ">
                            <p className="text-xl font-bold pb-4"><span className="p-2 bg-green-400 rounded-md">ServiceID:</span>{service_id}</p>
                            <h1 className="text-3xl font-bold pb-4 text-orange-600">{service_name}</h1>
                            <div>
                            <img className="w-1/2 h-60 rounded-md pb-4" src={service_image} alt="" />
                            </div>
                            <h2 className="text-xl text-gray-400 font-semibold"><span className="text-blue-400 font-bold">Provider Name:</span> {name}</h2>
                            <p className="text-xl font-semibold"><span className="font-bold text-orange-400">Email:</span>{provider_email}</p>
                        </div>
                         <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                            <form onSubmit={handleBooking}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Username</label>
                                        <input id="username" name="name" type="text" 
                                        value={user?.displayName}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                                        <input id="emailAddress" name="email" type="email" 
                                        value={user?.email}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
                                        {/* <DatePicker
                                            className='border p-2 rounded-md'
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                        /> */}
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Price</label>
                                        <input id="price" name="price" type="" value={service_price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    
                                    <div>
                                        <h2 className="text-xl font-semibold -mt-6">Special instruction</h2>
                                        <label className="text-gray-700 dark:text-gray-200 " >Address</label>
                                        <input id="username" name="name" type="text" 
                                        defaultValue='USA'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Area</label>
                                        <input id="username" name="name" type="text" 
                                        defaultValue='Regional coverage'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Customized Service Plan</label>
                                        <input id="username" name="name" type="text" 
                                        defaultValue='true'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                </div>

                                <div className="flex justify-end mt-6">
                                    <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
                                </div>
                            </form>
                        </section>
                       </div>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <input type="text" />
                            <button className="btn">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                 </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={service_image} alt="glasses photo"/>
        </div>
    </div>
    );
};

export default SignleService;
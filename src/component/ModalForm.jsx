import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const ModalForm = () => {
    const [startDate, setStartDate] = useState(new Date())
    const{user} = useContext(AuthContext);
    const service = useLoaderData()
    const { _id,
        service_id,
        service_name, 
        service_image, 
        deadline,
        service_description, 
         service_price,
         service_provider:{
            image,
            name,
            provider_email
         }
         } = service || {};

    const handleBooking = async e =>{
        e.preventDefault()
       const form = e.target
        const serviceId = _id 
        const user_email = user?.email
        const name = form.name.value
        const email = form.email.value
        const price = form.price.value
        // const deadline = deadline
        const status = 'Pending'

    const bookData ={
        serviceId, name, user_email, price, deadline, provider_email, status
    }
    console.table(bookData)
    } 
    return (
        <div className="hero h-[450px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="w-[500px] ">
                    <p className="text-xl font-bold pb-4"><span className="p-2 bg-green-400 rounded-md">ServiceID:</span>  {service_id}</p>
                    <h1 className="text-3xl font-bold pb-4 text-orange-600">{service_name}</h1>
                    <div>
                    <img className="w-full h-40 rounded-md pb-4" src={service_image} alt="" />
                    </div>
                    <h2 className="text-xl text-gray-400 font-semibold"><span className="text-blue-400 font-bold">Provider Name:</span> {name}</h2>
                    <p className="text-xl font-semibold"><span className="font-bold text-orange-400">Email:</span> {provider_email}</p>
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
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Price</label>
                                <input id="price" name="price" type="number" value={service_price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ModalForm;
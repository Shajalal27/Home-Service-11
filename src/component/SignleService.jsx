import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import ModalForm from "./ModalForm";



const SignleService = () => {
    const service = useLoaderData()
    const {service_name, 
        service_image, 
        service_description, 
         service_price,
         service_provider:{
            image,
            name
         }
         } = service;
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

                        <span className="mx-3 text-xl font-bold text-red-500">Price: $ {service_price}</span>
                    </div>

                   
                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <CiLocationOn style={{fontSize:'40'}}/>

                        <span className="mx-3">USA</span>
                    </div>

                    <div className="flex items-center px-3 gap-6">
                        <img className="w-12 h-12 rounded" src={image} alt="" />  
                        <p className="text-xl font-semibold">{name}</p> 
                    </div>
            
                </div>
                <div className="flex justify-end">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-warning text-xl font-bold" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>
                    <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                       <ModalForm/>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">X</button>
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
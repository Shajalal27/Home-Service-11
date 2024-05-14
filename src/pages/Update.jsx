
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


const Update = () => {
    // const {user} = useContext(AuthContext)
   const navigate = useNavigate()
   const service = useLoaderData()

   const{_id, 
    service_image, 
    service_name,
    service_description,  
    service_price,
   
    } = service;

    const handleUpdateService = e =>{
        e.preventDefault()
        const form = e.target
        const service_image = form.service_image.value
        const service_name = form.service_name.value
        const service_price =  parseFloat(form.service_price.value)
        const service_description = form.service_description.value
    
        const updateData = {service_image, service_name, service_price, service_description
         }
         console.log(updateData)

         fetch(`${import.meta.env.VITE_API_URL}/service/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
     } )
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            navigate('/manage-service');
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
        })
        .catch(err =>{
            console.log(err)
            toast.error('Faild dataa Update')
        })
    }


    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Service Updated</h2>

            <form onSubmit={handleUpdateService}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                        <input id="name" name="service_name" type="text" 
                        defaultValue={service_name}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Phot URL</label>
                        <input id="url" name="service_image" type="text" 
                        defaultValue={service_image}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Price</label>
                        <input id="title" name="service_price" type="text"
                        defaultValue={service_price}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Service Description</label>
                        <input id="price" name="service_description" type="text"
                        defaultValue={service_description}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Updated</button>
                </div>
            </form>
        </section>
    );
};

export default Update;
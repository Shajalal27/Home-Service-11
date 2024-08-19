import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddServicePage = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddService = e =>{
        e.preventDefault()
        const form = e.target
        const service_image = form.service_image.value
        const service_name = form.service_name.value
        const price = form.price.value
        const service_area = form.service_area.value
        const description = form.description.value
        const provider_email = form.provider_email.value
        const provider_photo = form.provider_photo.value
        const provider_name = form.provider_name.value

        const addData ={service_image, service_name, price, service_area,  description, provider_email, provider_photo, provider_name, 
         }
         console.log(addData)

         fetch(`${import.meta.env.VITE_API_URL}/add`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)
     } )
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            navigate('/services');
            if(data.insertedId){
                toast.success('Data added successfull')
            }
           
        })
        .catch(err =>{
            console.log(err)
            toast.error('Faild dataa added')
        })
    }


    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-700 capitalize dark:text-white italic text-center underline">Added Service</h2>

                <form onSubmit={handleAddService}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >ImgURL</label>
                            <input id="service_image" name="service_image" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >ServiceName</label>
                            <input id="service_name" name="service_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input id="price" name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Area</label>
                            <input id="location" name="service_area" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input id="description" name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Email</label>
                            <input id="mail" 
                            name="provider_email"
                            type="text" 
                            disabled
                            defaultValue={user?.email}
                             className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Img</label>
                            <input id="photo" 
                            name="provider_photo" 
                            type="text"
                            disabled
                            defaultValue={user?.photoURL}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Name</label>
                            <input id="name"
                             name="provider_name" 
                             type="text"
                             disabled
                            defaultValue={user?.displayName}
                             className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddServicePage;
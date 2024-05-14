import { useLoaderData } from "react-router-dom";
import ManageCard from "./ManageCard";
import toast from "react-hot-toast";
import { useState } from "react";





const ManageService = () => {
    const service = useLoaderData()
    const[services, setServices] = useState()

    const handleDelete = id =>{
        const proceed = confirm('Are Your sure Delete');
        if(proceed){
            fetch(`${import.meta.env.VITE_API_URL}/service/${id} `, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                services(data)
                if(data.deletedCount > 0){
                    toast.success('Delete Successfull')
                    const remaining = service.filter(services => services._id !== id)
                    setServices(remaining)
                }
            })
        }
    }
    
    return (
       <div className="">
                {
                    service.map(service => <ManageCard key={service._id} service={service} 
                    handleDelete={handleDelete}
                    />)
                }     
        </div>
       
    );
};

export default ManageService;
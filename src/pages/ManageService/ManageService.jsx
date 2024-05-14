import { useLoaderData } from "react-router-dom";
import ManageCard from "./ManageCard";
import Swal from "sweetalert2";





const ManageService = () => {
    const service = useLoaderData()

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to service!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) =>{
            if(result.isConfirmed){
                fetch(`${import.meta.env.VITE_API_URL}/service/${id} `, {
                    method: 'DELETE',
                    node: 'no-cors',
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                         title: "Deleted!",
                         text: "Service deleted successfull.",
                         icon: "success"
                        });
                    }
                })
            }
                
          }) 
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
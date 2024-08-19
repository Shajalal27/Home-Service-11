import { Link } from "react-router-dom";



const ManageCard = ({service, handleDelete}) => {
    const{_id, 
        service_image, 
        service_name,
        service_description,  
        service_price,
        
        } = service;

    const handleUpdate = id =>{
        fetch(`${import.meta.env.VITE_API_URL}/service/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                //
            }
        })
    }    
    
    return (
       
        <div className="hero  bg-base-200 shadow-xl border-2 mt-12 mb-12">
             <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/3 flex items-center justify-center">
                    <img className="max-w-80
                    object-cover" src={service_image} />
                </div>
                <div className="w-2/3">
                    <h1 className="text-5xl font-bold">{service_name}</h1>
                    <p className="py-6">{service_description}</p>
                   
                    <div className="flex  ">
                         <div className="flex gap-8">
                         <Link to={`/update/${service._id}`}>
                            <button onClick={() => handleUpdate(_id)}
                            className="btn btn-primary">Update
                            </button>
                         </Link>
                         <button onClick={() => handleDelete(_id)}
                          className="btn btn-primary">Delete</button>
                         </div>
                         <div>
                            <p className="ml-24 border bg-orange-400 p-2 font-bold  text-blue-700 rounded-md">Price:$ <span> {service_price}</span></p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default ManageCard;
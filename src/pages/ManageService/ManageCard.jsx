


const ManageCard = ({service, handleDelete}) => {
    const{_id, 
        service_image, 
        service_name,
        service_description,  
        service_price,
        service_provider
        } = service;

    
    return (
       
        <div className="hero  bg-base-200 shadow-xl border-2 mt-12">
             <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/3">
                    <img className="w-[400px] h-[200px]" src={service_image} />
                </div>
                <div className="w-2/3">
                    <h1 className="text-5xl font-bold">{service_name}</h1>
                    <p className="py-6">{service_description}</p>
                    <div className="flex gap-8">
                         <button className="btn btn-primary">Update</button>
                         <button onClick={() => handleDelete(_id)}
                          className="btn btn-primary">Delete</button>
                         <p className="ml-24 border bg-orange-400 p-2 font-bold flex justify-center items-center text-blue-700 rounded-md">Price:$ <span> {service_price}</span></p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default ManageCard;
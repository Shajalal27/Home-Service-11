

const ManageCard = ({service}) => {
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
                    <img className="w-[400px] h-[200px]" src={service_image} />
                <div>
                    <h1 className="text-5xl font-bold">{service_name}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <div className="flex gap-8">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-primary">Delete</button>
                   </div>
                </div>
            </div>
        </div>
       
    );
};

export default ManageCard;
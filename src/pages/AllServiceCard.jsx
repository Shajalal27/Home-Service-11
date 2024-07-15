import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const AllServiceCard = ({service}) => {
    const{_id, 
        service_image, 
        service_name,
        service_description, 
        service_area, 
        service_price,
        service_provider
        } = service;
    const providerImg = service_provider? service_provider.image : ""  ;  
    const providerName = service_provider? service_provider.name : ""  ; 
    return (
        <div>
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow-to-r-lg">
            <div>
            <img className="object-cover w-full h-64 hover:rotate-360" src={service_image} />
            <p className="text-2xl font-semibold text-red-600 p-2 flex justify-end">Price: $ {service_price}</p>
            </div>

            <div className="p-6">
                <div>
                
                    <h2 className="block mt-2 text-2xl font-bold text-gray-800 ">{service_name}</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{service_description?.slice(0, 100)}</p>
                    
                </div>
                <div className="pt-4 text-xl font-semibold text-gray-400 flex items-center gap-2">
                <CiLocationOn style={{fontSize:'40'}}/>
                    {service_area}</div>
                <div className="mt-4 flex justify-between">
                    <div className="flex items-center">
                    {providerImg && (
                        <div className="flex items-center">
                        <img className="object-cover w-10 h-10 rounded-full" src={providerImg} alt="Avatar"/>
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Provider: {providerName}</a>
                    </div>
                    )}
                        
                    </div>
                    <div>
                        <Link to ={`/service/${_id}`}>
                            <button className="btn btn-info text-xl font-bold">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllServiceCard;
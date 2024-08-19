import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const ServiceCard = ({service}) => {
    const{user} = useContext(AuthContext);
    const{_id, 
        service_image, 
        service_name,
        service_description,  
        service_price,
        service_provider
        } = service;
    const providerImg = service_provider? service_provider.image : ""  ;  
    const providerName = service_provider? service_provider.name : ""  ;  
   
    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow-to-r-lg">
                <div>
                <img  data-aos="zoom-in" data-aos-duration="1000" className="object-cover w-full h-64 hover:rotate-360" src={service_image} />
                <p data-aos="fade-left" className="text-2xl font-semibold text-red-600 p-2 flex justify-end">Price: $ {service_price}</p>
                </div>

                <div className="p-6">
                    <div >
                    
                        <h2  data-aos="flip-up" className="block mt-2 text-2xl font-bold text-gray-800 ">{service_name}</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{service_description?.slice(0, 100)}</p>
                        
                    </div>

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
                        { user?
                                <Link to ={`/service/${_id}`}>
                                <button className="btn btn-info text-xl font-bold">View Details</button>
                            </Link>
                            :
                            <Link to ="/login">
                                <button className="btn btn-info text-xl font-bold">View Details</button>
                            </Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
};

export default ServiceCard;
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";


const PopularService = ( {service} ) => {
    // const [services, setServices] = useState([])

    // useEffect( () =>{
    //     fetch('/public/data.json')
    //     .then(res => res.json())
    //     .then(data => setServices(data))

    // }, [])

    
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-400">Our popular Service</h2>
                <p className="text-2xl font-semibold">Home Service provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-16">
                {
                    service.map(service => <PopularServiceCard key={service._id} service={service}></PopularServiceCard>)
                }
            </div>
        </div>
    );
};

export default PopularService;
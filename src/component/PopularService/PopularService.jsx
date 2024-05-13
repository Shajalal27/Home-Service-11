/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopularServiceCard from "./PopularServiceCard";


const PopularService = ( {service} ) => {
    
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
            <div className="text-center pt-8 pb-12">
                <Link to='/services'>
                    <button className="btn text-2xl font-bold btn-primary">Show All</button>
                </Link>
                
            </div>
        </div>
    );
};

export default PopularService;
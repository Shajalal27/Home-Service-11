import { useEffect, useState } from "react";
import useHistory from "use-history";
import axios from "axios";
import ServiceCard from "../component/PopularService/ServiceCard";



const AllServices = () => {
   const[services, setServices] = useState([]);
   const history = useHistory();
   const[search, setSearch] = useState('')
   const[searchText, setSearchText] = useState('')

   useEffect(()=>{
    axios.get('http://localhost:5000/service')
        .then(res =>{
            setServices(res.data);
        })
        .catch(err =>{
            console.error(err);
        })
   }, [])
    // const allServices = useLoaderData() 
    

    // useEffect( () =>{
    //      fetch(`${import.meta.env.VITE_API_URL}/service`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }, [])

    
    
    return (
        
        <div>
            <div>
                <h2 className="text-3xl font-bold italic text-center pt-4">All services page</h2>
                <div  className="flex gap-2 items-center justify-center pt-2">
                <input type="text" 
                    id="searchInput"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    name="search"
                    placeholder="Enter Service Title" 
                    aria-label="Enter Service Title"

                 className="input input-bordered w-full max-w-xs pl-4 text-lg font-semibold " />
                <button  className="btn btn-primary text-xl font-semibold">Search</button>
                </div>
                
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-16">
                {
                    services.map(service => (<ServiceCard key={service._id} service={service}></ServiceCard>))
                }
                

            </div>
        </div>
    );
};

export default AllServices;
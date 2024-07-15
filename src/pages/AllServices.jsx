import { useEffect, useState } from "react";
import useHistory from "use-history";
import axios from "axios";
import ServiceCard from "../component/PopularService/ServiceCard";



const AllServices = () => {
   const[services, setServices] = useState([]);
   const history = useHistory();
   const[searchText, setSearchText] = useState('')

   useEffect(()=>{
    axios.get('http://localhost:5000/service')
        .then(res =>{
            setServices(res.data);
        })
        .catch(err =>{
            console.error(err);
        })
   }, []);

   const handleSearch = (event) =>{
    setSearchText(event.target.value);
   }

   const filteredServices = services.filter(service =>{
    const name = service.service_name || '';
    const description =  service.service_description || '';
    const providerName  = service.providerName || '';
    const area = service.service_area || '';

    return(
        name.toLowerCase().includes(searchText.toLowerCase()) ||
        description.toLowerCase().includes(searchText.toLowerCase()) ||
        providerName.toLowerCase().includes(searchText.toLowerCase()) ||
        area.toLowerCase().includes(searchText.toLowerCase())
    )

   });
   
    
    return (
        
        <div>
            <div>
                <h2 className="text-3xl font-bold italic text-center pt-4">All services page</h2>
                <div  className="flex gap-2 items-center justify-center pt-2">
                <input type="text" 
                    id="searchInput"
                    onChange={handleSearch}
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
                    filteredServices.map(service => (<ServiceCard key={service._id} service={service}></ServiceCard>))
                }
                

            </div>
        </div>
    );
};

export default AllServices;
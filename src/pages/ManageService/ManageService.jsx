import { useLoaderData } from "react-router-dom";
import ManageCard from "./ManageCard";





const ManageService = () => {
    const service = useLoaderData()
    
    return (
       <div className="">
                {
                    service.map(service => <ManageCard key={service._id} service={service} />)
                }     
        </div>
       
    );
};

export default ManageService;
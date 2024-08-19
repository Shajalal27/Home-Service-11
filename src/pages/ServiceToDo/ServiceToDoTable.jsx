import axios from "axios";
import { useEffect, useState } from "react";

const ServiceToDoTable = ({booking}) => {
    const{service_image, service_name, user_name, user_email, service_price, status} = booking;

    const[services, setServices] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect( () =>{
        
    }, []);

    const handleStatusChange = (id, newStatus) =>{
        axios.put(`${import.meta.env.VITE_API_URL}/`,)
    }
    
    return (
        <tr>
            
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={service_image} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="font-bold">{user_name}</div>
                <div className="text-sm opacity-50">{user_email}</div>
                </div>
            </div>
            </td>
            <td>
                {service_name}
            </td>
            <td><span>$</span>{service_price}</td>
            <td> {new Date(booking.deadline).toLocaleDateString()}</td>
            <td>
            <select value={booking.status} className="p-3 border rounded-md bg-rose-200">
                <option className="p-2 text-lg font-semibold rounded-md" value="pending" >Pending</option>
                <option className="p-2 text-lg font-semibold rounded-md" value="working" >Working</option>
                <option className="p-2 text-lg font-semibold rounded-md" value="complete" >Complete</option>
               
            </select>
            </td>
            
        </tr>
    );
};

export default ServiceToDoTable;
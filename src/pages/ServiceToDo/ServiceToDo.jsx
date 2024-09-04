import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import ServiceToDoTable from "./ServiceToDoTable";




const ServiceToDo = () => {
   const{user} = useContext(AuthContext)
   const[bookings, setBookings] = useState([])
    
    useEffect( () =>{
        getData()
    }, [user])

    const getData= async () =>{
        const{data} = await axios(`${import.meta.env.VITE_API_URL}/book`)
        console.log(data)
        setBookings(data)
    }
   
    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-lg font-bold text-orange-500">
                        
                        <th>CUSTOMER</th>
                        <th>SERVICE NAME</th>
                        <th>PRICE</th>
                        <th>DATE</th>
                        <th>STATUS</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                      bookings.map(booking =><ServiceToDoTable
                        key={booking._id}
                       booking={booking}
                      />)  
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceToDo;






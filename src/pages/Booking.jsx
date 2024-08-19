import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingTableRow from "./BookingTableRow";


const Booking = () => {

    const {user} = useContext(AuthContext);
    const[bookings, setBookings] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/book?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setBookings(data);
        })
        .catch(err =>{
            console.log(err);
        });

    }, [])

    return (
        <div>
            <h2>Booking service:{bookings.length}</h2>
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
                        bookings.map(booking =>
                            <BookingTableRow 
                            key={booking._id}
                            booking={booking}
                            ></BookingTableRow>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;
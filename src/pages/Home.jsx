
import { useEffect, useState } from "react";
import AppService from "../component/AppService";
// import PopularService from "../component/PopularService/PopularService";
import Slider from "../component/Slider/Slider";
import axios from "axios";
import ServiceCard from "../component/PopularService/ServiceCard";
import useHistory from "use-history";
import { Link } from "react-router-dom";
import FeedBackSection from "./FeedBackSection";

const Home = () => {
    // const service = useLoaderData();
    // console.log(service)
    const[services, setServices] = useState([]);
    const history = useHistory();
    

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/service`)
        .then(res =>{
            setServices(res.data.slice(0,6));
        })
        .catch(err =>
            console.error(err));
    }, []);

    const handleViewDetails =(id)=>{
        if(!localStorage.getItem('user')){
            history.push('/login');
        }
        else{
            history.push(`/service/${id}`);

        }
    };


    return (
        <div>
             <Slider className='relative'/>
             {/* <PopularService service=""/> */}
             <div>
                <h2 className="text-center text-3xl font-bold underline text-blue-800">Popular Services </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-16">
                    {
                      services.map(service =>(
                        <ServiceCard key={service._id} service={service} onViewDetails={handleViewDetails}></ServiceCard>
                      ))
                    }
                </div>
             </div>
             <div className="text-center pt-8 pb-12">
                <Link to='/services'>
                    <button className="btn text-2xl font-bold btn-primary" onClick={()=>history.push('/service')} >Show All
                    </button>
                </Link>
                
             </div>
             <FeedBackSection></FeedBackSection>
            <AppService/>
        </div>
    );
};

export default Home;
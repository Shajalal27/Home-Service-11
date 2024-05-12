import { useLoaderData } from "react-router-dom";
import AppService from "../component/AppService";
import PopularService from "../component/PopularService/PopularService";
import Slider from "../component/Slider/Slider";


const Home = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div>
             <Slider/>
             <PopularService service={service}/>
            <AppService/>
        </div>
    );
};

export default Home;
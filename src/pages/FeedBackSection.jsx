import likeImg from '../assets/images/like.png';
import yearImg from '../assets/images/year.png';
import manImg from '../assets/images/man.png';
import projectImg from '../assets/images/project.jpg';

const FeedBackSection = () => {

  
        const valueDisplays = document.querySelectorAll(".num");
        const interval = 4000;

        valueDisplays.forEach((valueDisplay) =>{
            let startValue = 0;
            const endValue = parseInt(valueDisplay.getAttribute("data-val"));
            const duration = Math.floor(interval / endValue);

            const counter = setInterval(function () {
                startValue += 1;
                
                valueDisplay.textContent = startValue;
                if(startValue == endValue){
                    clearInterval(counter);
                }
            }, duration);
        });
   
    
    
    return (
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-10">
            <div className="card bg-slate-100 text-neutral-content w-80">
                <div className="card-body items-center text-center">
                    <img className='w-20 h-24 pb-8' src={likeImg} alt="" />
                    <p className='text-4xl font-bold border-b-4 w-20 pb-4 text-black border-green-300'><span className='num' data-val="100">000</span>%</p>
                    <div className="card-actions justify-end">
                      <p className="text-2xl text-gray-500 font-semibold">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-100 text-neutral-content w-80">
                <div className="card-body items-center text-center">
                    <img className='w-20 h-24 pb-8' src={yearImg} alt="" />
                   
                    <p className='text-4xl font-bold border-b-4 w-20 pb-4 text-black border-green-300'><span className='num' data-val="5">000</span></p>
                    <div className="card-actions justify-end">
                      <p className="text-2xl text-gray-500 font-semibold">Years in the Market</p>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-100 text-neutral-content w-80">
                <div className="card-body items-center text-center">
                    <img className='w-20 h-24 pb-8' src={manImg} alt="" />
                    <p className=' text-4xl font-bold border-b-4 w-20 pb-4 text-black border-green-300'><span className='num' data-val="540">000</span></p>
                    <div className="card-actions justify-end">
                      <p className="text-2xl text-gray-500 font-semibold">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-100 text-neutral-content w-80">
                <div className="card-body items-center text-center">
                    <img className='w-20 h-24 pb-8' src={projectImg} alt="" />
                    <p className=' text-4xl font-bold border-b-4 w-20 pb-4 text-black border-green-300'><span className='num' data-val="930">000</span></p>
                    <div className="card-actions justify-end">
                      <p className="text-2xl text-gray-500 font-semibold">Projects Completed</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FeedBackSection;

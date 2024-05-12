import barCodeImg from '../assets/images/barcode.png'
import appImg from '../assets/images/app.png'
import googlePlayImg from '../assets/images/home-play-store.png'
import appStoreImg from '../assets/images/home-app-store.png'


const AppService = () => {
    return (
        <div>
            <div className='text-center text-4xl font-bold text-orange-500 pb-12'>
            Build Your On-demand Home Services App Now
            </div>
            <div className='flex lg:flex-row  flex-col-reverse  justify-center items-center'>
                <div className=''>
                    <img src={barCodeImg} alt="" />
                    <h3 className='flex justify-center items-center text-xl font-bold text-slate-400'>Scan QR code</h3>
                </div>
                <div className='lg:pb-0 pt-6'>
                   <h2 className='text-2xl font-bold'>Download Home Service App</h2> 
                   <p className='text-xl'>Make Your Life Easier by Downloading Home Service App</p>
                   <div className='flex gap-4'>
                        <img src={googlePlayImg} alt="" />
                        <img src={appStoreImg} alt="" />
                   </div>
                </div>
                <div >
                    <img src={appImg} alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default AppService;